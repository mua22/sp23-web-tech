const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
router.get("/logout", async (req, res) => {
  req.session.user = null;
  console.log("session clear");
  return res.redirect("/login");
});
router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    // req.session.flash = { type: "danger", message: "User Not Present" };
    req.flash("danger", "User with this email not present");
    return res.redirect("/login");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    req.session.user = user;
    req.flash("success", "Logged in Successfully");
    return res.redirect("/");
  } else {
    req.flash("danger", "Invalid Password");
    return res.redirect("/login");
  }
});
router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.post("/register", async (req, res) => {
  await User.deleteMany({});
  let user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);
  await user.save();
  res.redirect("/login");
});
module.exports = router;
