const express = require("express");
const ejs = require("ejs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
let listings = require("./list");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/listings", (req, res) => {
  res.render("listings/index", { listings });
});

app.post("/listings", (req, res) => {
  const { title, host, price, description } = req.body;
  let { imgSrc } = req.body;
  imgSrc = `/images/${imgSrc}`;
  listings.push({ title, host, description, imgSrc, price, id: uuidv4() });
  res.redirect("listings/index");
});

app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

app.get("/listings/:id", (req, res) => {
  const { id } = req.params;
  const listing = listings.find((l) => l.id === id);
  res.render("listings/show", { listing });
});

app.delete("/listings/:id", (req, res) => {
  const { id } = req.params;
  listings = listings.filter((l) => l.id !== id);
  res.redirect("/listings");
})

app.listen(port, () => {
  console.log(`Listing App listening at http://localhost:${port}`);
});
