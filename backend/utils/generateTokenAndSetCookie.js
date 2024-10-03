require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret_key = process.env.JWT_SECRECT;
const node_env = process.env.NODE_ENV;

exports.generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({userId}, secret_key, {expiresIn: '1h'})

    res.cookie("token", token, {
        httpOnly: true,
        secure: node_env === "production",
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return token;
}