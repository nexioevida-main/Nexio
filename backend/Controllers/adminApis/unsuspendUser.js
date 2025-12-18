import User from "../../Models/usersSchemas.js";

export default async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.isSuspended = false;
    user.suspensionReason = undefined;

    await user.save();

    res.status(200).json({
      message: "User unsuspended successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
