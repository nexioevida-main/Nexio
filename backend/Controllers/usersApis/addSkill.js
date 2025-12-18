export default async (req, res) => {
  try {
    const { name, level } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Skill name is required",
      });
    }

    req.user.skills.push({
      name,
      level,
    });

    await req.user.save();

    res.status(201).json({
      message: "Skill added successfully",
      skills: req.user.skills,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
