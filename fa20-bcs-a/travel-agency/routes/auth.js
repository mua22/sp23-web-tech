const express = require("express");
let router = express.Router();
let User = require("../models/User");
router.get("/login", (req, res) => {
  res.render("auth/login", {});
});
router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.post("/register", async (req, res) => {
  await User.deleteMany({});
  //   return res.send(req.body);
  let userObj = req.body;
  const bcrypt = require("bcryptjs");
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(userObj.password, salt);
  userObj.password = hashed;
  let user = new User(userObj);
  await user.save();
  res.redirect("/deals");
});
module.exports = router;
