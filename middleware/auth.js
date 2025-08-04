module.exports = {
  ensureAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect('/login');
  },

  ensureAdmin(req, res, next) {
    if (req.session.user?.role === 'admin') return next();
    res.status(403).send('Access denied');
  }
};
