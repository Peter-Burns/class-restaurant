var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var tables = [];
var waitList = [];

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/tables/clear", function (req, res) {
    waitList = [];
    tables = [];
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});