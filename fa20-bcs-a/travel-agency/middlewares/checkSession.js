//add this middleware befor any route and after session middleware
module.exports = function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.flash = req.session.flash;
  req.session.flash = null;
  req.setFlash = function (type, message) {
    req.session.flash = { type, message };
  };
  //   res.locals.flash = { type: "success", message: "Hello Class" };
  next();
};
