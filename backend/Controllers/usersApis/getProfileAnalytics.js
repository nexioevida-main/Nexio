export default async (req, res) => {
  try {
    res.status(200).json({
      profileViews: req.user.profileViews || 0,
      uniqueViews: req.user.uniqueViewers?.length || 0,
      completion: req.user.completion,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
