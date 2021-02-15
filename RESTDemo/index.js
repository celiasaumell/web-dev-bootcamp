const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"))
const comments = [
  {
    id: uuidv4(),
    username: "Todd",
    comment: "LOL hilarious!",
  },
  {
    id: uuidv4(),
    username: "SarahLovesFlowers",
    comment: "I really do love flowers... of all types!!!",
  },
  {
    id: uuidv4(),
    username: "AmazingStar",
    comment: "You are not very smart!",
  },
  {
    id: uuidv4(),
    username: "onlysaysWOOF",
    comment: "woof woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect("comments");
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentTxt = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentTxt;
  res.redirect("/comments");
});

app.listen(port, () => {
  console.log("On port", port);
});
