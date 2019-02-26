var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        res.render("index");
    });

    // Load USER page
    app.get("/user", function (req, res) {
        res.render("user");
    });

    // Load GROUP page
    app.get("/group", function (req, res) {
        res.render("group");
    });

    // Load EVENT page
    app.get("/event", function (req, res) {
        res.render("event");
    });

    // Load example page and pass in an example by id

    app.get("/example/:id", function (req, res) {
        res.render("example");

    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};