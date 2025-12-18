import User from "../../Models/usersSchemas.js";

export default async (req, res) => {
  try {
    const users = await User.find().select(
      "username gmail role isSuspended createdAt"
    );

    res.status(200).json({
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
