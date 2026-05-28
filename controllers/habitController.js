const Habit = require("../models/habitsLog");

exports.getAddHabitPage = (req, res) => {
    res.render("addHabit", {title: "Add Habit"});
};

exports.saveHabit = async (req, res) => {
    const { habitName, category, frequency } = req.body; 
    try {
        const newHabit = new Habit({habitName, category, frequency});
        await newHabit.save();
        res.render("dashboard");
    } catch (error){
        next(error);
    }
};

exports.getAllHabits = async(req, res, next) => {
    try {
        const habits = await Habit.find();
        res.render("dashboard", {habits});
    } catch (error) {
        next(error);
    }
};

