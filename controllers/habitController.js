const Habit = require("../models/habitsLog");

exports.getAddHabitPage = (req, res) => {
    res.render("addHabit", {title: "Add Habit"});
};

exports.getEditHabitPage = (req, res) => {
    res.render("editHabit", {title: "Edit Habit"});
}''

exports.saveHabit = async (req, res, next) => {
    const { habitName, category, frequency } = req.body; 
    try {
        const newHabit = new Habit({habitName, category, frequency});
        await newHabit.save();
        res.redirect("/dashboard");
    } catch (error){
        next(error);
    }
};

exports.deleteHabit = async (req, res, next) => {
    let habitId = req.params.id;
    try {
        await Habit.findByIdAndDelete(habitId);
        res.redirect("/dashboard");
    } catch (error) {
        next(error);
    }
};

exports.completeHabit = async (req, res, next) => {
    let habitId = req.params.id;
    try {
        await Habit.findByIdAndUpdate(habitId, {isCompleted: true});
        res.redirect("/dashboard");
    } catch (error) {
        next(error);
    }
};

exports.editHabit = async (req, res, next) => {
    let habitId = req.params.id;
    try {
        const {habitName, category, frequency} = req.body;
        await Habit.findByIdAndUpdate(habitId, {habitName, category, frequency});
        res.redirect("/dashboard");
    } catch (error) {
        next(error);
    }
};

exports.getAllHabits = async(req, res, next) => {
    try {
        const habits = await Habit.find();
        res.render("dashboard", {title: "Dashboard", habits });
    } catch (error) {
        next(error);
    }
};

