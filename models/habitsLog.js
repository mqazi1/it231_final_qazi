const mongoose = require("mongoose");

habitSchema = mongoose.Schema({
    habitName: {type: String, required: true},
    category: {type: String, required: true},
    frequency: {type: String, required: true},
});

module.exports = mongoose.model("Habit", habitSchema)