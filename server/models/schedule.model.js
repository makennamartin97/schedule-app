const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    activity: {
        type: String,
        required: [true, 'Activity is required'],
        minlength: [3, 'Must be at least 3 characters']
    },
    desc: {
        type: String,
        required:[true, "Description is required"],
        minlength: [5, "Description must be at least 5 caracters"]
    },
    start: {
        type: Date,
        required: [true, "Start is required"]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
        min: [0, 'Duration cannot be less than 0']
    },
    timeunits: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model("Schedule", ScheduleSchema);