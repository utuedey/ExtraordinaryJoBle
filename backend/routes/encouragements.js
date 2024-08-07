// backend/routes/encouragements.js
const express = require('express');
const router = express.Router();
const Encouragement = require('../models/Encouragement');
const { createEncouragement, getAllEncouragement, getEncouragementById, updateEncouragementById, deleteEncouragement } = require('../controllers/encourController');

// Create a new encouragement message
router.post('/', createEncouragement);

// Get all encouragement messages
router.get('/', getAllEncouragement);

// Get a specific encouragement message
router.get('/:id', getEncouragementById);

// Update an encouragement message
router.put('/:id', updateEncouragementById);

// Delete an encouragement message
router.delete('/:id', deleteEncouragement);

module.exports = router;
