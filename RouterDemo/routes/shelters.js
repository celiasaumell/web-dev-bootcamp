const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("All shelters")
})

router.post("/", (req, res) => {
    res.send("Creating shelters")
})

router.get("/:id", (req, res) => {
    res.send("One shelter")
})

router.get("/:id/edit", (req, res) => {
    res.send("Editing one shelter")
})

module.exports = router;