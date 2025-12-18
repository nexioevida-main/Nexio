export default async (req, res) => {
  try {
    const { experienceId } = req.params;

    const experience = req.user.experience.id(experienceId);

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    experience.remove();
    await req.user.save();

    res.status(200).json({
      message: "Experience deleted successfully",
      experience: req.user.experience,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
