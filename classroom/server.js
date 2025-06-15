const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req,res)=>{
  res.cookie("made-in", "IND", {signed: true});
  res.send("signed cookie sent")
});

app.get("/verify",(req, res)=>{
  console.log(req.signedcookies);
  res.send("verified");
});

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "hello");
  res.cookie("madein", "India");
  res.send("Set you some cookies!");
});

app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;
  res.send(`Hi, ${name}`);
});

app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("Hi, I am root!");
});

app.use("/users", users);
app.use("/posts", posts);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
