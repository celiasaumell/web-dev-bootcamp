const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("Sorry you're not an admin!");
});

router.get("/topsecret", (req, res) => {
  res.send("Top secret");
});

router.get("/deleteeverything", (req, res) => {
  res.send("Ok deleted everything!");
});

module.exports = router;
