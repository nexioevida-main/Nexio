import User from "../../Models/usersSchemas.js";
import calculateProfileCompletion from "../../utils/profileCompletion.js";
import crypto from "crypto";

export default async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username }).select(
      "username profile skills experience profileViews uniqueViewers createdAt"
    );

    if (!user || user.isSuspended) {
      return res.status(404).json({
        message: "User profile not found",
      });
    }

    // ======================
    // VIEW TRACKING
    // ======================
    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "unknown";

    const hashedIp = crypto
      .createHash("sha256")
      .update(ip)
      .digest("hex");

    if (!user.uniqueViewers.includes(hashedIp)) {
      user.uniqueViewers.push(hashedIp);
      user.profileViews += 1;
      await user.save();
    }

    const completion = calculateProfileCompletion(user);

    res.status(200).json({
      message: "Public profile fetched",
      completion,
      profileViews: user.profileViews,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
