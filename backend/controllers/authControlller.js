require('dotenv').config();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Endpoint for user registragion
exports.register = async (req, res) => {

    const { email, username, password } = req.body;

    try {
        // check if the email already exists

        const existingUser = await User.findOne({email});

        if (existingUser) {
            return res.status(400).json({ message: "User already exists"})
        }

        hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({email, username, password: hashedPassword});

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        // Check if users exist
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({ message: "Invalid credentials"})
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(200).json({
                status: "success",
                message: "user login successfully",
                user: {
                    "access_token": token,
                    "username": user.username,
                    "userId": user._id
                }
            });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error", error
        });
    }
};

