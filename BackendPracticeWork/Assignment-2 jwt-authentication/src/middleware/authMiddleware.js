const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, "your-secret-key");

    // Attach the decoded user ID to the request object
    req.userId = decoded.userId;

    // Move to the next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
