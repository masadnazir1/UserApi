import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res
      .status(401)
      .json({ error: "Authorization Error. Please login again." });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Authorization token required." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}

export default verifyToken;
