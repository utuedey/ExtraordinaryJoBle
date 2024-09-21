require('dotenv').config();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require('../logger')

const { generateVerficationToken } = require('../utils/generateVerificationCode');
const { generateTokenAndSetCookie } = require('../utils/generateTokenAndSetCookie');


// Endpoint for user registragion
exports.register = async (req, res) => {

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

       const verificationToken = generateVerficationToken();

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

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"});

        logger.info('User logged in succesfully')

        res.status(200).json({
                status: "success",
                message: "user login successfully",
                user: {
                    "access_token": token,
                    "username": user.username,
                    "userId": user._id
                }
            });
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            message: "Internal Server error"
        });
    }
};

exports.logout = async (req, res) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        // Invalidate the token by adding it to the blacklist
        invalidateToken(token);

        // Destroy session if used
        if (req.session) {
            req.session.destroy((error) => {
                if (err) {
                    return res.status(500).send({ messsage: 'Logout failed'});
                }
                res.clearCookie('connect.sid'); // Adjust this according to your cookie name
                return res.send({ message: 'Logoit successful'});
            });
        } else {
            res.send({ message: 'Logout successful'});
        }
    } catch ( error ){
        res.status(500).send({ message: "Logout failed"})
    }
}
