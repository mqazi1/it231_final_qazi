exports.getHomePage = (req, res) => {
    res.render("index", {title: "Home"});
};

exports.getAboutPage = (req, res) => {
    res.render("about", {title: "About"});
};

exports.getBlogPage = (req, res) => {
    res.render("blog", {title: "Motivation Blog"});
};

exports.getContactPage = (req, res) => {
    res.render("contact", {title: "Contact"});
};

exports.getThanksPage = (req, res) => {
    res.render("thanks", {title: "Confirmation"});
};
