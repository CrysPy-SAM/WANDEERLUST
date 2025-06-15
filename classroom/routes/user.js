const express = require("express");
const router = express.Router();

// Index – GET all users
router.get("/", (req, res) => {
  res.send("GET all users");
});

// Show – GET user by ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`GET user with ID: ${userId}`);
});

// Create – POST a new user
router.post("/", (req, res) => {
  res.send("POST: Create a new user");
});

// Delete – DELETE user by ID
router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`DELETE user with ID: ${userId}`);
});

module.exports = router;
