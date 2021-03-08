const express = require("express");
const app = express();

const User = require("./models/user");
const ejs = require("ejs");
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/authdemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({ secret: "notagoodsecret" }));

app.use(express.urlencoded({ extended: true }));

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const user = new User({ username, password });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findAndValidate(username, password);
  if (foundUser) {
    req.session.user_id = foundUser._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});

app.listen(3000, () => {
  console.log("serving your app on port 3000s");
});
