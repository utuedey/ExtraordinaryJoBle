// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const reminderRoutes = require('./routes/reminders');
const scheduleRoutes = require('./routes/schedules');
const encouragementRoutes = require('./routes/encouragements');


const app = express();

app.use(bodyParser.json());
app.use(cors());

// authentication middleware
app.use('/api/auth', authRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/encouragements', encouragementRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Extraordinary JoBle API');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

