const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const wrapAsync = require("../utilities/wrapAsync");
const User = require("../models/user");
const passport = require("passport");

router.route("/register")
  .get(users.registerForm)
  .post(wrapAsync(users.registerAccount));

router
  .route("/login")
  .get(users.loginForm)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    users.login
  );

router.get("/logout", users.logout);

module.exports = router;
