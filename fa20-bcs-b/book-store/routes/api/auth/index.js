const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../../models/user");
router.post("/", async function (req, res, next) {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send("User Not Found");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid Password");
  }
  const token = jwt.sign(
    {
      _id: user._id,
      roles: user.roles,
      name: user.name,

      email: user.email,
    },
    "jwtPrivateKey"
  );

  return res.send(token);
});

module.exports = router;
