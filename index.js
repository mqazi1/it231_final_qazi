const express = require("express"), 
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    habitController = require("./controllers/habitController"),
    contactController = require("./controllers/contactController")

    mongoose = require("mongoose"),
    layouts = require("express-ejs-layouts");

mongoose.connect(
    "mongodb+srv://mqazi1:Mendes98@cluster0.gevvjfr.mongodb.net/habits?appName=Cluster0"
)

const db = mongoose.connection;
db.once("open", () => {
    console.log("Connection to MongoDB has been successfully created!")
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json());

app.get("/", homeController.getHomePage);
app.get("/about", homeController.getAboutPage);
app.get("/blog", homeController.getBlogPage);
app.get("/dashboard", habitController.getAllHabits);
app.get("/contact", contactController.getContactPage);
app.get("/add-habit", habitController.getAddHabitPage);
app.get("/habit/:id/edit", habitController.getEditHabitPage);
app.get("/queries", contactController.getAllQueries)
app.get("/thanks", homeController.getThanksPage);

app.post("/add-habit", habitController.saveHabit);
app.post("/habit/:id/delete", habitController.deleteHabit);
app.post("/habit/:id/complete", habitController.completeHabit);
app.post("/habit/:id/edit", habitController.editHabit);
app.post("/save-query", contactController.saveFeedback);

app.use(errorController.noPageFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Success! Connection is secured and the server is live at http://localhost:${app.get("port")}`);
});