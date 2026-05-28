const express = require("express"), 
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),

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


app.listen(app.get("port"), () => {
    console.log(`Success! Connection is secured and the server is live at http://localhost:${app.get("port")}`);
});