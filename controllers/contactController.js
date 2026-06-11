const Feedback = require("../models/feedback");

exports.getContactPage = (req, res) => {
    res.render("contact", {title: "Contact"});
};

exports.saveFeedback = async (req, res, next) => {
    const {name, email, feedback} = req.body;
    try {
        const newFeedback = new Feedback({name, email, feedback});
        await newFeedback.save();
        res.redirect("/thanks");
    } catch (error) {
        next(error);
    }
};

exports.getAllQueries= async(req, res, next) => {
    try {
        const queries = await Feedback.find();
        res.render("queries", {title: "User Queries", queries});
    } catch (error) {
        next(error);
    }
};