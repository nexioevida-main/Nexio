import User from "../../Models/usersSchemas.js";

export default async (req, res) => {
  try {
    const {
      query,
      skill,
      country,
      page = 1,
      limit = 10,
    } = req.query;

    // ======================
    // SAFE PAGINATION
    // ======================
    const pageNumber = Math.max(Number(page), 1);
    const pageLimit = Math.min(Number(limit), 50);
    const skip = (pageNumber - 1) * pageLimit;

    // ======================
    // FILTERS
    // ======================
    const filters = {
      isSuspended: false,
    };

    // 🔍 Optimized text search (uses MongoDB index)
    if (query) {
      filters.$text = { $search: query };
    }

    // 🛠 Skill filter
    if (skill) {
      filters.skills = {
        $elemMatch: {
          name: { $regex: skill, $options: "i" },
        },
      };
    }

    // 🌍 Country filter
    if (country) {
      filters["profile.country"] = {
        $regex: country,
        $options: "i",
      };
    }

    // ======================
    // QUERY
    // ======================
    const users = await User.find(filters)
      .select("username profile skills experience createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageLimit)
      .lean(); // ⚡ memory + speed optimization

    const total = await User.countDocuments(filters);

    res.status(200).json({
      page: pageNumber,
      totalPages: Math.ceil(total / pageLimit),
      totalResults: total,
      users,
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
