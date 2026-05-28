exports.getHomePage = (req, res) => {
    res.render("index", {title: "Home"});
};

exports.getAboutPage = (req, res) => {
    res.render("about", {title: "About"});
};

exports.getAddHabitPage = (req, res) => {
    res.render("addHabit", {title: "Add Habit"});
};

exports.getBlogPage = (req, res) => {
    res.render("blog", {title: "Motivation Blog"});
};

exports.getContactPage = (req, res) => {
    res.render("contact", {title: "Contact"});
};

exports.getDashboardPage = (req, res) => {
    res.render("addHabit", {title: "Dashboard"});
};

exports.getThanksPage = (req, res) => {
    res.render("thanks", {title: "Confirmation"});
};
