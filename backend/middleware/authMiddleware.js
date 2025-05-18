import jwt from "jsonwebtoken";

/**
 * Middleware to verify JWT token from Authorization header.
 * Attaches the decoded user info to req.user on success.
 */
const isAuthnticated = (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth || !auth.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is required" });
  }

  const token = auth.split(" ")[1]; // extract token after Bearer

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded data to user

    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is invalid or expired" });
  }
};

export default isAuthnticated;
