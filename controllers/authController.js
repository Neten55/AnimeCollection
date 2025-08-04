const User = require('../models/userModel');

module.exports = {
  showRegister(req, res) {
    res.render('auth/register', { message: req.flash('error') });
  },

  async register(req, res) {
    const { username, password } = req.body;
    try {
      const existing = await User.findUserByUsername(username);
      if (existing) {
        req.flash('error', 'Username already exists');
        return res.redirect('/register');
      }

      await User.createUser(username, password);
      res.redirect('/login');
    } catch (err) {
      console.error(err);
      req.flash('error', 'Error registering user');
      res.redirect('/register');
    }
  },

  showLogin(req, res) {
    res.render('auth/login', { message: req.flash('error') });
  },

  async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findUserByUsername(username);

    if (!user || user.suspended) {
      req.flash('error', 'Invalid credentials or account suspended');
      return res.redirect('/login');
    }

    const valid = await User.validatePassword(user, password);
    if (!valid) {
      req.flash('error', 'Invalid credentials');
      return res.redirect('/login');
    }

    req.session.user = {
      id: user.id,
      username: user.username,
      role: user.role
    };

    res.redirect('/dashboard');
  },

  logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }
};
