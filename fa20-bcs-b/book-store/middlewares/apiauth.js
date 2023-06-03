const jwt = require("jsonwebtoken");
const User = require("../models/user");
async function apiauth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");

    const user = await User.findById(decoded._id).select("-password");
    if (!user) return res.status(400).send("Invalid token: User Dont exist");
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong at server");
  }
}

module.exports = apiauth;
