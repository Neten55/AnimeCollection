const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = {
    showLogin: (req, res) => {
        res.render('login', { user: req.session.user, error: null });
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = { id: user.id, username: user.username };
            return res.redirect('/anime');
        }
        res.render('login', { user: null, error: 'Invalid credentials' });
    },
    showRegister: (req, res) => {
        res.render('register', { user: req.session.user, error: null });
    },
    register: async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.render('register', { user: null, error: 'All fields are required' });
        }
        const existingUser = await User.findByUsername(username);
        if (existingUser) {
            return res.render('register', { user: null, error: 'Username already exists' });
        }
        await User.createUser(username, password);
        res.redirect('/login');
    },
    logoutUser: (req, res) => {
        req.session.destroy(() => {
            res.redirect('/');
        });
    }
};