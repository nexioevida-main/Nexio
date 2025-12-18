export default async (req, res) => {
  // 🔒 Prevent username change (SEO + public links)
  if (req.body.username) {
    return res.status(400).json({
      message: "Username cannot be changed once created",
    });
  }

  try {
    const { country, street, bio } = req.body;

    // Ensure profile object exists
    if (!req.user.profile) {
      req.user.profile = {};
    }

    if (country !== undefined) req.user.profile.country = country;
    if (street !== undefined) req.user.profile.street = street;
    if (bio !== undefined) req.user.profile.bio = bio;

    await req.user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: req.user,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
