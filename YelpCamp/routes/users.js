const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilities/wrapAsync");
const User = require("../models/user");
const passport = require("passport");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post(
  "/register",
  wrapAsync(async (req, res, next) => {
    try {
      const { email, username, password } = req.body;
      const user = new User({ email, username });
      const registered = await User.register(user, password);
      req.login(registered, (err) => {
        if (err) return next(err);
      });
      req.flash("success", "Welcome to Yelp Camp!");
      res.redirect("/campgrounds");
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/register");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const { username } = req.body;
    req.flash("success", `Welcome back, ${username}!`);
    const redirectUrl = req.session.returnTo || "/campgrounds"
    delete req.session.returnTo;
    res.redirect(redirectUrl);
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "Goodbye!");
  res.redirect("/");
});
module.exports = router;
