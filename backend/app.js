// backend/app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const reminderRoutes = require('./routes/reminders');
const scheduleRoutes = require('./routes/schedules');
const encouragementRoutes = require('./routes/encouragements');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/encouragements', encouragementRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Extraordinary JoBle API');
});

const mongoDBURL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

// connect to database
mongoose
.connect(mongoDBURL)
.then(() => {
    // the express server should run only when the database is connected
    console.log('App connected to database');
    app.listen(PORT, function server() {
        console.log(`App is listening on port ${PORT}`)
    });
})
.catch((error) => {
    console.log(error);
});
