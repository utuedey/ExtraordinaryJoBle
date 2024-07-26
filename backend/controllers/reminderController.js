const Reminder = require("../models/Reminder");

// Create a reminder
exports.createReminder = async (req, res) => {
    const { userId, message, remindAt } = req.body;

    try {
        const remindAt = new Date()
        const newReminder = new Reminder({
            userId, message, remindAt
        });
        await newReminder.save();
        res.status(201).json({ 
            status: "sucess",
            message: "Reminder created",
            reminder: {
                newReminder
            }
        });
    } catch (error) {
        res.statu(500).json({message: "Server error", error});
    }
};

// Get all reminders
exports.getAllReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find();
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json({message: "Server error", error});
    }
}

// Get a specific reminder
exports.getReminderById = async (req, res) => {
    const reminderId = req.params.id;

    try {
        const reminder = await Reminder.findById(reminderId);

        if (!reminder) {
            res.status(404).json({ message: "Reminder not found"});
        }
        res.status(200).json(reminder);
    } catch (error) {
        res.status(500).json({ message: "Server error", error});
    }
}

// update reminder
exports.updateReminderById = async (req, res) => {

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
};

// Delete a reminder
exports.deleteReminderById = async (req, res) => {
    
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
};