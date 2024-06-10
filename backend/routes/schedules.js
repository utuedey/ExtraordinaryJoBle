// backend/routes/schedules
const express = require('express');
const router = express.Router;
const Schedule = require('../models/Schedule');


// Create a new schedule
router.post('/', async (req, res) =>{
    const { userId, date, tasks } = req.body;

    try {
        const newSchedule = new Schedule({ userId, date, tasks });
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
