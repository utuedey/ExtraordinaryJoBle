const Task = require('../models/Task');

// Get Tasks
exports.getTasks = async (req, res) => {
    try {

        const tasks = await Task.find();

        if (!tasks) {
            return res.status(404).json(
                {message: 'No Task created'}
            )
        }
        res.status(200).json(tasks)

    } catch (error) {
        console.error('Error in GetTasks')
        res.status(500).json({
            error: "Internal server errror"
        })
    }
}

// Create Task
exports.createTask = async (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: 'Name field is required'
        })
    }
    try {   

        const newTask = new Task({
            name
        });

        const savedTask = await newTask.save();
    
        res.status(200).json(savedTask);

    } catch (error) {
        console.error('Error in CreateTask')
        res.status(500).json({
            error: "Internal server errror"
        })
    }
}

// Create Task
exports.updateTask = async (req, res) => {

    const { id } = req.params;
    const { completed, assignedTo } = req.body;
    
    try {   

        const updatedTask = await Task.findByIdAndUpdate(id, 
            {
                completed, assignedTo
            }, { new: true });
    
        res.status(200).json(updatedTask);

    } catch (error) {
        console.error('Error in UpdateTask')
        res.status(500).json({
            error: "Internal server errror"
        })
    }
}