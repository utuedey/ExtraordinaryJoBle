const Schedule = require('../models/Schedule');

// Create a schedule
exports.createSchedule = async (req, res) => {
    const { userId, date, tasks } = req.body;

    try {

        const newSchedule = new Schedule({
            userId, date: new Date(), tasks
        });
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(500).json({
            message: 'Server error', error
        });
    }

};

// Get a specific schedule
exports.getScheduleById = async (req, res) => {
    try {
        const id = req.params.id;
        const schedule = await Schedule.findById(id)

        if (!schedule) {
            res.status(404).json({ message: "Schedule not found"});
        }
        res.status(201).json(schedule);
    } catch (error) {
        res.status(500).json({ message: "Server error", error});
    }
}

// Update a specific schedule
exports.UpdateScheduleById = async (req, res) => {
    const { userId, date, tasks } = req.body;
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(
            req.params.id,
            { userId, date: new Date(), tasks },
            { new: true }
        );
        if (!updatedSchedule) {
            return res.status(404).json({
                message: "Schedule not found"
            })
        }
        res.status(201).json(updatedSchedule);
    } catch (error) {
        res.status(500).json({ message: "Server error", error});
    }
}

// Delete a schedule
exports.deleteScheduleById = async (req, res) => {
    try {
        const scheduleId = req.params.id;

        const deletedSchedule = await Schedule.findByIdAndDelete(scheduleId);
        if (!deletedSchedule) {
            return res.status(404).json({ message: 'Schedule not found'});
        }
        res.status(201).json({ message: "Schedule deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Server error", error});
    }
};
