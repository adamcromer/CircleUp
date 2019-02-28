var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("user");
    }
    res.render("index");
  });
  // Loads Login page
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/user");
    }
    res.render("login");
  });
  
  // Load USER page
  app.get("/user", isAuthenticated, function(req, res) {
    res.render("user");
  });

  // Load GROUP page
  app.get("/group", isAuthenticated, function(req, res) {
    res.render("group");
  });

  // Load EVENT page
  app.get("/event", function(req, res) {
    res.render("event");
  });

  // Load example page and pass in an example by id

  app.get("/example/:id", function(req, res) {
    res.render("example");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
