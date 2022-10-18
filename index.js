const express = require("express");
const app = express();

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

app.listen(3000, () => console.log("Listening on port 3000"));
