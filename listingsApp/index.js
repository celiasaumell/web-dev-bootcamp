const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = 3000;

app.get("/listings", (req, res) => {
    res.send("It's working!")
})

app.listen(port, () => {
  console.log(`Listing App listening at http://localhost:${port}`);
});
