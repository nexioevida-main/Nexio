const updateSkills = async (req, res) => {
    const { skillID } = req.params;
    try{
    const skills = req.user.skills.id(skillID)

    if (!skills) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    const allowedFields = ["name", "level"];

    const updates = {};

    for (const field of allowedFields) {
        if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
        }
    }
    Object.assign(skills, updates);

    await req.user.save();

    res.status(200).json({
      message: "Skill updated successfully",
      skill: skills,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });

}
}

export default updateSkills;