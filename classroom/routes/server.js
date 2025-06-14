const express = require("express");
const app = express();
app.get("/", (req, res) =>{
    res.send("Hi, I am root!");
})
// Root Route
app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

// Index – users
app.get("/users", (req, res) => {
  res.send("GET for users");
});

// Show – users
app.get("/users/:id", (req, res) => {
  res.send("GET for user id");
});

// POST – users
app.post("/users", (req, res) => {
  res.send("POST for users");
});

// DELETE – users
app.delete("/users/:id", (req, res) => {
  res.send("DELETE for user id");
});
