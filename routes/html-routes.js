// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the form page
    if (req.user) {
      res.redirect("/form");
    }
    else{
    res.sendFile(path.join(__dirname, "../public/index.html"));}
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the form page
    if (req.user) {
      res.redirect("/form");
    }
    else{
    res.sendFile(path.join(__dirname, "../public/index.html"));}
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the form page
    if (req.user) {
      res.redirect("/form");
    }
    else{
    res.sendFile(path.join(__dirname, "../public/signup.html"));}
  });

  app.get("/schedules", (req, res) => {
    // If the user already has an account send them to the schedules page
    if (!req.user) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    }
    else{
      res.sendFile(path.join(__dirname, "../public/schedules.html"));
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/form", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });
};
