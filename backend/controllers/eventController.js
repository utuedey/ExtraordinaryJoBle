const Event = require('../models/Event');

// Create Event
exports.CreateEvent = async (req, res) => {
    try {
        const { title, date } = req.body;
        if (!title || !date) {
            return res.status(400).json({
                error: "Title and date are required"
            })
        }

        const userId = req.userId

        if (!userId) {
            return res.status(400).json({
                error: "UserId required"
            })
        }

        const newEvent = new Event({ title, date, createdBy: userId});

        console.log(newEvent)

        const savedEvent = await newEvent.save();

        if (!savedEvent) {
            res.status(400).json({
                message: "Failed to save new event"
            })
        }
        
        res.status(201).json(savedEvent);

    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({
            error: 'Failed to create event'
        });
    }
}

// Get Events
exports.GetEvents = async (req, res) => {
    try {

        const events = await Event.find({ createdBy: req.userId});

        if (!events) {
            res.status(404).json({
                message: "No Event found"
            })

        }
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch events'
        });
    }
}
