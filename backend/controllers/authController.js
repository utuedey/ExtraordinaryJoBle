require('dotenv').config();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const logger = require('../logger')

const { generateVerificationToken } = require('../utils/generateVerificationCode');
const { generateTokenAndSetCookie } = require('../utils/generateTokenAndSetCookie');
const {
    sendVerificationEmail,
    sendPasswordResetEmail,
    sendResetSuccessEmail,
    sendWelcomeEmail,

} = require('../mailtrap/emails');


// Endpoint for user registragion
exports.signup = async (req, res) => {

    const { email, username, password } = req.body;

    try {

        // Check if the all the inputs are provided
        if (!email || !password || !username) {
            throw new Error('All fields are required')
        }

        // check if the email already exists
        const existingUser = await User.findOne({email});

        if (existingUser) {
            logger.error("Email id already exits");
            return res.status(400).json({ message: "User already exists"})
        }

       const hashedPassword = await bcrypt.hash(password, 10);

       const verificationToken = generateVerificationToken();

        const newUser = new User({
            email,
            username,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24hours
        });

        await newUser.save();

        generateTokenAndSetCookie(res, newUser._id);

        await sendVerificationEmail(newUser.email, verificationToken)

        // Log the successful registration using the logger
        logger.info("User registered successfully")

        res.status(201).json({ 
            status: "success",
            message: 'User created successfully',
            user: {
                ...newUser._doc,
                password: undefined,
            }
        });

    } catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Internal server error'});
    }
};

//verify email Endpoint
exports.VerifyEmail = async (req, res) => {
    const { code } = req.body;

    try {

        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() }
        })

        if (!user) {
            res.status(400).json({
                success: false,
                message: "Invalid or expired token"
            })
        }

        user.isVerified = true,
        user.verificationToken = undefined,
        user.verificationTokenExpiresAt = undefined
        await user.save();

        await sendWelcomeEmail(user.email, user.username)

        logger.info("Email verified successfully")

        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        });

    } catch (error) {
        logger.error(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })

    }
}

//Login Endpoint
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        // Check if users exist
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            logger.error("Passwords do not match");
            return res.status(404).json({ message: "Wrong password"});
        }

        generateTokenAndSetCookie(res, user._id)

        user.lastlogin = new Date();
        await user.save();

        logger.info('User logged in succesfully')

        res.status(200).json({
                status: "success",
                message: "user login successfully",
                user: {
                    ...user._doc,
                    password: undefined
                }
            });
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            message: "Internal Server error"
        });
    }
};

// Logout Endpoint
exports.logout = async (req, res) => {
    res.clearCookie('token');

    logger.info('User logged out succesfully')

    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}

// Forgot Password Endpoint
exports.ForgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email })

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        // Generate Reset Token
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1hr

        user.resetPasswordToken = resetToken;
        user.resetPasswordTokenExpiresAt = resetTokenExpiresAt;

        await user.save();

        // send email with reset Token

        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`)

        logger.info('User Forgot Password mail sent successfully')

        res.status(200).json(
            {
                success: true,
                message: "Password reset link sent to your email",
            }
        )
    } catch (error) {
        logger.error(error)
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

// Reset Password Endpoint
exports.ResetPassword = async (req, res) => {
    try {
        const {token} = req.params;
        const {password} = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordTokenExpiresAt: { $gt: Date.now()}
        })

        if (!user) {
            res.status(400).json({
                success: false,
                message: "Invalid or expired reset token"
            });
        }
        // update password
        const hashedPassword = await bcrypt.hash(password, 10)

        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpiresAt = undefined;
        await user.save()

        await sendResetSuccessEmail(user.email);

        logger.info('User Password Reset successful')

        res.status(200).json({
            success: true,
            message: "Password Reset successful"
        })
    } catch (error) {
        logger.error(error)
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// Authentication check Endpoint
exports.checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        logger.info('User Authentication successful');

        res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        logger.error(error)
        res.status(400).json({
            success: false,
            message: error.message
        });

    }
}
