import jwt from "jsonwebtoken";
import User from "../Models/usersSchemas.js";

// ======================
// AUTH MIDDLEWARE
// ======================
export const authMiddleware = async (req, res, next) => {
  try {
    // Read JWT from cookies
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required. Please login.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid token. User not found.",
      });
    }

    if (verifiedUser.isSuspended) {
      return res.status(403).json({
        message: "Your account has been suspended",
      });
}

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

// ======================
// ADMIN MIDDLEWARE
// ======================
export const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  if (!["admin", "altimateAdmin"].includes(req.user.role)) {
    return res.status(403).json({
      message: "Admin access required",
    });
  }

  next();
};
