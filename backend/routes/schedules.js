// backend/routes/schedules
const express = require('express');
const router = express.Router();
const { createSchedule, getScheduleById, UpdateScheduleById, deleteScheduleById } = require('../controllers/scheduleController');

// Create a new schedule
router.post('/', createSchedule);

// Get a specific schedule
router.get('/:id', getScheduleById);

// Update a specific schedule
router.put('/:id', UpdateScheduleById);

// Delete a schedule
router.delete('/:id', deleteScheduleById);

module.exports = router;
