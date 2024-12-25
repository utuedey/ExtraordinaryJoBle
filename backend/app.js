// backend/app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pinoHttp = require('pino-http');
const pinoLogger = require('./logger')
const path = require('path')
const connectToDatabase = require('./models/db');

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const taskRoutes = require('./routes/taskRoutes');
const reminderRoutes = require('./routes/reminders');
const scheduleRoutes = require('./routes/schedules');
const encouragementRoutes = require('./routes/encouragements');

const logger = require('./logger')

const cookieParser = require('cookie-parser');
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true}));
app.use(pinoHttp({ logger }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/schedules', scheduleRoutes);
app.use('/api/v1/reminders', reminderRoutes);
app.use('/api/v1/encouragements', encouragementRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Extraordinary JoBle API');
});

const PORT = process.env.PORT || 5000;

// connect to database
connectToDatabase()
.then(() => {
    // the express server should run only when the database is connected
    pinoLogger.info('App connected to database');
    app.listen(PORT, function server() {
        console.log(`App is listening on port ${PORT}`)
    });
})
.catch((error) => {
    console.log(error);
});
