const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const redditData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")))

//   app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   //res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE");
//   //res.send({color : "red"})
//   res.send("<h1>This is my webpage</h1>");
// });
app.get("/", (req, res) => {
  console.log("ROOT ROUTE");
  res.render("home");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("rand", { rand: num });
});

//use : to create a path pattern
app.get("/r/:subreddit/", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render('notfound', { subreddit })
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Oreo", "Hippo", "Sunflower"];
  res.render("cats", { cats });
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for: ${q}</h1>`);
});
//matches every single request
app.get("*", (req, res) => {
  res.send("I don't know that path.");
});
// /cats => 'meow'
// /dogs => 'woof'
// '/' => 'Welcome to our homepage'

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
