const Encouragement = require('../models/Encouragement');


// Create a new encouragement message
exports.createEncouragement = async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    try {
        const newEncouragement = new Encouragement({
            senderId, receiverId, message
        });
        await newEncouragement.save();
        res.status(201).json(newEncouragement);
    } catch (error) {
        res.status(500).json({
            message: 'Server error', error
        });
    }
};

// Get all encouragement messages
exports.getAllEncouragement = async (req, res) => {
    try {
        const encouragements = await Encouragement.find();
        res.status(200).json(encouragements);
    } catch (error){
        res.status(500).json({ message: "Server error", error});
    }
};

// Get a specific encouragement message
exports.getEncouragementById = async (req, res) => {
    const encourId = req.params.id;
    try {
        const encouragement = await Encouragement.findById(encourId);

        if (!encouragement) {
            res.status(404).json({ message: "Encouragement not found"});            
        }
        res.status(200).json(encouragement);
    } catch (error) {
        res.status(500).json({
            message: "Server error", error
        })
    }
};


// update an encouragement message
exports.updateEncouragementById = async (req, res) => {
    const encourId = req.params.id;
    const { senderId, receiverId, message } = req.body;
    try {
        const updatedEncouragement = await Encouragement.findByIdAndUpdate(encourId, 
            { senderId, receiverId, message },
            {new: true}
    );
        if (!updatedEncouragement) {
            res.status(404).json({ message: "Encouragement fail to update"});
        }
        res.status(201).json(updatedEncouragement)
    } catch (error) {
        res.status(500).json({ message: "Server error"}, error);
    }
};

// Delete an encouragement message
exports.deleteEncouragement = async (req, res) => {
    try {
        const deletedEncouragement = await Encouragement.findByIdAndDelete(req.params.id);
        if (!deletedEncouragement) {
            return res.status(404).json({ message: 'Encouragement not found' });
        }
        res.status(200).json({ message: 'Encouragement deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
