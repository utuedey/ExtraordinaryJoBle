// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use(bodyParser.json());
app.use(cors());

// authentication middleware
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to Extraordinary JoBle API');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

