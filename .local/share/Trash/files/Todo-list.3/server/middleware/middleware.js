const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    return res.status(401).json({ message: "Not authenticated!" });
  }
  const token = req.headers.authorization.split("Bearer ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });
  });
  next();
};
module.exports = checkToken;
