import calculateProfileCompletion from "../../utils/profileCompletion.js";

export default async (req, res) => {
  try {
    const completion = calculateProfileCompletion(req.user);

    res.status(200).json({
      message: "Profile fetched successfully",
      completion,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
