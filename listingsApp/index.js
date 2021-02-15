const express = require("express");
const ejs = require("ejs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const listings = require("./list");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/listings", (req, res) => {
  res.render("listings", { listings });
});

app.post("/listings", (req, res) => {
  const {title, host, price, description} = req.body;
  let {imgSrc} = req.body;
  imgSrc = `images/${imgSrc}`;
  listings.push({title, host, description, imgSrc, price, id: uuidv4()})
  res.redirect("listings");
})

app.get("/listings/new", (req, res) => {
  res.render("listings/new")
})

app.listen(port, () => {
  console.log(`Listing App listening at http://localhost:${port}`);
});
