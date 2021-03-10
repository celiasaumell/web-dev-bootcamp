const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const wrapAsync = require("../utilities/wrapAsync");
const User = require("../models/user");
const passport = require("passport");

router.get("/register", users.registerForm);

router.post("/register", wrapAsync(users.registerAccount));

router.get("/login", users.loginForm);

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  users.login
);

router.get("/logout", users.logout);

module.exports = router;
