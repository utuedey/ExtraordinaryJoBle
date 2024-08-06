// Database configuration
require('dotenv').config();
const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URL;

async function connectToDatabase() {
    // connect to database
    await mongoose.connect(dbUrl)
}

module.exports = connectToDatabase;