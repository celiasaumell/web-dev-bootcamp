const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("On port", port)
})

app.get("/tacos", (req, res) => {
    res.send("GET /tacos")
})