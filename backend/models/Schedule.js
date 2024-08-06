// backend/models/Schedule.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        default: false
    },
    endTime: {
        type: Date,
        default: false
    },
    allDay: {
        type: Boolean,
        default: false
    },
    recurring: {
        type: Boolean,
        default: false
    },
    recurrencPattern: {
        type: String,
        enum: ['daily', 'weekly', 'monthly'],
        default: 'daily'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
