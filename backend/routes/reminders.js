// backend/routes/reminders.js
const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder')


// Create a reminder
router.post('/', async (req, res) => {
    const { userId, message, remindAt } = req.body;

    try {
        const newReminder = new Reminder({ userId, message, remindAt });
        await newReminder.save();
        res.status(201).json(newReminder);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get all reminders
router.get('/', async (req, res) => {
    try {
        const reminders = await Reminder.find();
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get a specific reminder
router.get('/:id', async (req, res) => {
    try {
        const reminder = await Reminder.findById(req.params.id);
        
        if (!reminder) {
            return res.status(404).json({ message: "Reminder not found" });
        }
        res.status(200).json(reminder);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Update reminder
router.put('/:id', async (req, res) => {

    const { userId, message, remindAt } = req.body;
    
    try {
        const updatedReminder = await Reminder.findByIdAndUpdate(
            req.params.id,
            { userId, message, remindAt },
            { new: true }
        );
        if (!updatedReminder) {
            res.status(404).json({ message: "Reminder not found"});
        }
        res.status(200).json(updatedReminder);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// delete reminder
router.delete('/:id', async (req, res) => {
    
    try {
        const deletedReminder = await Reminder.findByIdAndDelete(
            req.params.id,);
        if (!deletedReminder) {
            res.status(404).json({ message: "Reminder not found"});
        }
        res.status(200).json({ message: "Reminder deleted successfully "});
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;