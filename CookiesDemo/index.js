const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser("mysecret"));

app.get("/greet", (req, res) => {
  const { name = "No-name" } = req.cookies;
  res.send(`Hey there ${name}`);
});

app.get("/setname", (req, res) => {
  console.log(req.cookies);
  res.cookie("name", "wow");
  res.send("sent you a cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Ok signed your fruit cookie")
});

app.get("/verifyfruit", (req, res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies)
  });

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
