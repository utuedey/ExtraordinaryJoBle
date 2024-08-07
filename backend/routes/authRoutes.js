// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const { register, login, logout } = require('../controllers/authControlller');

// Signup route
router.post('/signup', register)

// Login route
router.post('/login', login)

// Logout route
router.post('/logout', authenticateToken, logout);

module.exports = router;
