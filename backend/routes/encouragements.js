// backend/routes/encouragements.js
const express = require('express');
const router = express.Router();
const Encouragement = require('../models/Encouragement');

// Create a new encouragement message
router.post('/', async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    try {
        const newEncouragement = new Encouragement({ senderId, receiverId, message });
        await newEncouragement.save();
        res.status(201).json(newEncouragement);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get all encouragement messages
router.get('/', async (req, res) => {
    try {
        const encouragements = await Encouragement.find();
        res.status(200).json(encouragements);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get a specific encouragement message
router.get('/:id', async (req, res) => {
    try {
        const encouragement = await Encouragement.findById(req.params.id);
        if (!encouragement) {
            return res.status(404).json({ message: 'Encouragement not found' });
        }
        res.status(200).json(encouragement);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Update an encouragement message
router.put('/:id', async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    try {
        const updatedEncouragement = await Encouragement.findByIdAndUpdate(
            req.params.id,
            { senderId, receiverId, message },
            { new: true }
        );
        if (!updatedEncouragement) {
            return res.status(404).json({ message: 'Encouragement not found' });
        }
        res.status(200).json(updatedEncouragement);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Delete an encouragement message
router.delete('/:id', async (req, res) => {
    try {
        const deletedEncouragement = await Encouragement.findByIdAndDelete(req.params.id);
        if (!deletedEncouragement) {
            return res.status(404).json({ message: 'Encouragement not found' });
        }
        res.status(200).json({ message: 'Encouragement deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
