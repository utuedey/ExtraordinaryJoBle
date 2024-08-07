// backend/routes/reminders.js
const express = require('express');
const router = express.Router();
const { deleteReminderById, updateReminderById, getReminderById, getAllReminders, createReminder } = require('../controllers/reminderController');


// Create a reminder
router.post('/', createReminder);

// Get all reminders
router.get('/', getAllReminders);

// Get a specific reminder
router.get('/:id', getReminderById);

// Update reminder
router.put('/:id', updateReminderById);

// delete reminder
router.delete('/:id', deleteReminderById);

module.exports = router;