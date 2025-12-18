export const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!["admin", "altimateAdmin"].includes(req.user.role)) {
    return res.status(403).json({
      message: "Admin access required",
    });
  }

  next();
};
