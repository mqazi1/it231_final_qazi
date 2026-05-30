const feedback = require("../models/feedback");

exports.getContactPage = (req, res) => {
    res.render("contact", {title: "Contact"});
};

exports.saveFeedback = async (req, res) => {
    const {name, email, feedback} = req.body;
    try {
        const newFeedback = new Feedback({name, email, feedback});
        await newFeedback.save();
        res.render("thanks");
    } catch (error) {
        next(error);
    }
};

exports.getAllQueries= async(req, res, next) => {
    try {
        const query = await Feedback.find();
        res.render("queries", {feedback});
    } catch (error) {
        next(error);
    }
};