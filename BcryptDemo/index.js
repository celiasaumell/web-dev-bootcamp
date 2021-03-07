const express = require("express");
const app = express();

const User = require("./models/user");
const ejs = require("ejs");
const path = require("path");
const bcrypt = require("bcrypt");

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

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
      username, password: hash
  })
  await user.save();
  res.redirect("/");
});

app.get("/secret", (req, res) => {
  res.send("a secret that cannot be seen");
});

app.listen(3000, () => {
  console.log("serving your app on port 3000s");
});
// const hashPass = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// };
// const login = async (pw, hashedPw) => {
//     const result = await bcrypt.compare(pw, hashedPw)
//     if(result) {
//         console.log("logged in")
//     } else {
//         console.log("incorrect")
//     }
// }

// //hashPass("monkey");

// login('monkey!', '$2b$12$biTrMKNCVPXQ0LzSAipqo.QggmaTF8dng9YVg0FpWvbNkRe9Im6TS')
