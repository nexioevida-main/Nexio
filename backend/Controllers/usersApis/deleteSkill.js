export default async (req, res) => {
  try {
    const { skillID } = req.params;    
    const skill = req.user.skills.id(skillID)

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    await skill.deleteOne();
    await req.user.save();

    res.status(200).json({
      message: "Skill deleted successfully",
      skills: req.user.skills,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
