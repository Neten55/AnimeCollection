const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Show login page
router.get('/login', authController.showLogin);

// Handle login form submission
router.post('/login', authController.login);

// Show register page
router.get('/register', authController.showRegister);

// Handle register form submission
router.post('/register', authController.register);

// Handle logout
router.get('/logout', authController.logoutUser);

module.exports = router;