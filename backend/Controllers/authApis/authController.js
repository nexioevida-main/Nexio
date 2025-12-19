import User from "../../Models/usersSchemas.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import {sendMail} from "../../Utils/sendMail.js";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ======================
// HELPER: JWT TOKEN
// ======================
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });
};

// ======================
// SIGN UP (EMAIL)
// ======================
export const signup = async (req, res) => {
  const { username, gmail, password } = req.body;

  if (!username || !gmail || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ gmail });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      username,
      gmail,
      password: hashedPassword,
      isVerified: true,
    });

    // OPTIONAL: send verification mail later
    await sendMail({
      mailFrom: `AlieXpressApp ${process.env.EMAIL_USER}`,
      mailTo: gmail,
      subject: "Welcome to Job Seeker Visibility Platform",
      body: `
        <h2>Welcome ${username} 🎉</h2>
        <p>Your account has been created successfully.</p>
      `,
    });

    res.status(201).json({
      message: "Account created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Signup failed",
      error: error.message,
    });
  }
};

// ======================
// LOGIN (EMAIL/PASSWORD)
// ======================
export const logginIn = async (req, res) => {
  const { gmail, password } = req.body;

  if (!gmail || !password) {
    return res.status(400).json({
      message: "Please provide all fields",
    });
  }

  try {
    const user = await User.findOne({ gmail });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.googleId) {
      return res.status(400).json({
        message: "Please login using Google",
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        message: "Account not verified",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user._id);

        res.cookie("token", token, {
        httpOnly: true,
        sameSite:  process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 5 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        user,
      });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

// ======================
// GOOGLE SIGNUP / LOGIN
// ======================
export const googleAuth = async (req, res) => {
    const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Google token missing" });
  }

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    

    let user = await User.findOne({ gmail:payload.email, googleId:payload.sub  });

    if (!user) {
      const baseUsername = payload.name
      .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

    let username = baseUsername;
    let exists = await User.findOne({ username });
    let counter = 1;

    while (exists) {
        username = `${baseUsername}-${counter}`;
        exists = await User.findOne({ username });
        counter++;
        }

        user = await User.create({
            gmail: payload.email,
            googleId: payload.sub,
            username: username,
            isVerified: true,
        });
    }

    const jwtToken = generateToken(user._id);

    res
      .cookie("token", jwtToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({
        message: "Google authentication successful",
        user,
      });
  } catch (error) {
    res.status(401).json({
      message: "Google authentication failed",
    });
  }
};

// ======================
// PASSWORD RESET REQUEST
// ======================
export const passwordResetRequest = async (req, res) => {
  const { gmail } = req.body;

  try {
    const user = await User.findOne({ gmail });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.googleId) {
      return res.status(400).json({
        message: "Google accounts cannot reset password",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.passwordResetToken = token;
    user.passwordResetExpires = Date.now() + 20 * 60 * 1000;
    await user.save();

    await sendMail({
      mailFrom: `AlieXpressApp ${process.env.EMAIL_USER}`,
      mailTo: gmail,
      subject: "Reset Password",
      body: `
        <p>Click below to reset your password:</p>
        <a href="http://localhost:5000/password/reset/${token}">
          Reset Password
        </a>
      `,
    });

    res.status(200).json({
      message: "Password reset email sent",
    });
  } catch (error) {
    res.status(500).json({
      message: "Password reset request failed",
    });
  }
};

// ======================
// RESET PASSWORD
// ======================
export const passwordReset = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired token",
      });
    }

    user.password = await bcryptjs.hash(newPassword, 10);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Password reset failed",
    });
  }
};

// ======================
// LOGOUT
// ======================
export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({
    message: "Logged out successfully",
  });
};
