module.exports = function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.flash = req.session.flash;
  req.session.flash = null;

  req.flash = function (type, message) {
    req.session.flash = { type, message };
  };
  next();
};
