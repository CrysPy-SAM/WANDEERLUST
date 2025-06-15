const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.use(cookieParser());

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "hello");
  res.send("Hi I am Satyam!");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

app.use("/users", users);
app.use("/posts", posts);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
