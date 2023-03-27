const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// First API - Hello World
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// Second API - Get with params
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

// Third API - Get with query
app.get("/person", (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name}`);
});

// Fourth API - Post
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.send(`Username: ${username} and Password: ${password}`);
});

app.listen(3000, () => console.log("Listening on port 3000"));
