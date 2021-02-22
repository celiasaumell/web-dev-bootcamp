const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("views", path.join(__dirname, "views"));

mongoose.connect("mongodb://localhost/FarmStand2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to mongo!");
});

const verifyPass = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  //res.send("PASSWORD NECESSARY");
  throw new Error("Password required!");
};

app.use(morgan("tiny"));

app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/secret", verifyPass, (req, res) => {
  res.send("My secret is........ I love spaghetti!")
})


app.listen(3000, () => {
  console.log("Listening on port 3000");
});
