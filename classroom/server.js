const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require("./routes/user");

// Root route
app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

// Use route modules
app.use("/users", userRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
