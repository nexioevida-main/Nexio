export default async (req, res) => {
  try {
    const { title, company, startDate, endDate, isCurrent, description } =
      req.body;

    if (!title || !company || !startDate) {
      return res.status(400).json({
        message: "Title, company and start date are required",
      });
    }

    req.user.experience.push({
      title,
      company,
      startDate,
      endDate,
      isCurrent,
      description,
    });

    await req.user.save();

    res.status(201).json({
      message: "Experience added successfully",
      experience: req.user.experience,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
