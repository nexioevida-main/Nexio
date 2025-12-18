export default async (req, res) => {
  try {
    const { skillId } = req.params;

    const skillIndex = req.user.skills.findIndex(
      (skill) => skill._id.toString() === skillId
    );

    if (skillIndex === -1) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    req.user.skills.splice(skillIndex, 1);
    await req.user.save();

    res.status(200).json({
      message: "Skill deleted successfully",
      skills: req.user.skills,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
