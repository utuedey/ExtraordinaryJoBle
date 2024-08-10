require("dotenv").config();
const jwt = require('jsonwebtoken');
const blacklist = new Set();

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send({ message: "Access Denied" });
    }

    if (blacklist.has(token)) {
        return res.status(403).send({ message: 'Token has been invalidated'});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send({ message: "Invalid Token"})
        }

        req.user = user;
        next();
    });
}

const invalidateToken = (token) => {
    blacklist.add(token);
}

module.exports = {authenticateToken, invalidateToken};