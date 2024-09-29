// backend/routes/auth.js
const express = require('express');
const router = express.Router();

const { 
    signup,
    login,
    logout,
    VerifyEmail,
    ForgotPassword,
    ResetPassword,
    checkAuth
} = require('../controllers/authController');

const { verifyToken } = require('../middlewares/verifyToken')


// Verification token
router.get('/check-auth', verifyToken, checkAuth);

// Signup route
router.post('/signup', signup)

// Login route
router.post('/login', login)

// Logout route
router.post('/logout', logout);

// Email verification link
router.post('/verify-email', VerifyEmail);

// Forget Password route
router.post('/forgot-password/:token', ForgotPassword);

// Reset Password route
router.post('/reset-password/:token', ResetPassword);

module.exports = router;
