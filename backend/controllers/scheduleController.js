const Schedule = require('../models/Schedule');

// Create a schedule
exports.createSchedule = async (req, res) => {
    const { userId, title, 
            description, startTime,
            endTime, allDay,
            recurring, recurrencPattern } = req.body;

    try {
        const newSchedule = new Schedule({
            userId, title, 
            description, startTime: new Date(),
            endTime: new Date(), allDay,
            recurring, recurrencPattern
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
    const { userId, title, 
            description, startTime,
            endTime, allDay,
            recurring, recurrencPattern} = req.body;
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(
            req.params.id,
            { userId, title, description, startTime: new Date(),
              endTime: new Date(), allDay,recurring, recurrencPattern},
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
