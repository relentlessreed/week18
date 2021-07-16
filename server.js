const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes

// Deals with Data
app.use(require("./routes/api.js"));

// Deals with HTML files that our font end wants to see
app.use(require("./routes/pages.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});