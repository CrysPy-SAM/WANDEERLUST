const express = require("express");
const router = express.Router();

// Index – posts
router.get("/", (req, res) => {
  res.send("GET all posts");
});

// Show – post by ID
router.get("/:id", (req, res) => {
  res.send(`GET post with ID ${req.params.id}`);
});

// Create – post
router.post("/", (req, res) => {
  res.send("POST new post");
});

// Delete – post by ID
router.delete("/:id", (req, res) => {
  res.send(`DELETE post with ID ${req.params.id}`);
});

module.exports = router;
