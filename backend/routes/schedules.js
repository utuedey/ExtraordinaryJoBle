// backend/routes/schedules
const express = require('express');
const router = express.Router();
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

// Get a specific schedule
router.get('/:id', async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found'});
        }
        res.status(201).json(schedule);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }

});


// Update a specific schedule
router.put('/:id', async (req, res) => {
    const { userId, date, tasks } = req.body;

    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(
            req.params.id,
            { userId, date, tasks },
            { new : true }
        );
        if (!updatedSchedule) {
            return res.status(404).json({ message: 'Schedule not found'});
        }
        res.status(201).json(updatedSchedule);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }

});

// Delete a schedule
router.delete('/:id', async (req, res) => {
    try {
        const deletedSchedule = await Schedule.findByIdAndDelete(
            req.params.id);
        if (!deletedSchedule) {
            return res.status(404).json({ message: 'Schedule not found'});
        }
        res.status(200).json({ message: "Schedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }

});

module.exports = router;
