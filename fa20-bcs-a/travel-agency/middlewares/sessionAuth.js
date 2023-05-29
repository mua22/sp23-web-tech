//
module.exports = function (req, res, next) {
  if (!req.session.user) {
    req.setFlash("danger", "You need to login to access this resource");
    res.redirect("/login");
  } else next();
};
