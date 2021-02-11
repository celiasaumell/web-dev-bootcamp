const express = require("express");
const app = express();
const port = 3000;
//   app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   //res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE");
//   //res.send({color : "red"})
//   res.send("<h1>This is my webpage</h1>");
// });
app.get("/", (req, res) => {
  console.log("ROOT ROUTE");
  res.send("Welcome to our homepage");
});
//use : to create a path pattern
app.get("/r/:subreddit/", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Viewing the ${subreddit} subreddit</h1>`);
})

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing the Post Id ${postId} on ${subreddit}</h1>`);
})

app.get("/cats", (req, res) => {
  console.log("CAT REQUEST");
  res.send("meow");
});

//this .post will still be as is if '*' in app.get was first because this is a post not a get..
app.post("/cats", (req, res) => {
  console.log("CAT POST REQUEST");
  res.send("This is different than a get request");
});

app.get("/dogs", (req, res) => {
  console.log("DOG REQUEST");
  res.send("woof");
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
