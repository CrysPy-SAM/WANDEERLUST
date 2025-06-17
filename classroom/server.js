const express = require("express");
//const cookieParser = require("cookie-parser");
const app = express();
const session = require("express-session");
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const { name } = require("ejs");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions =({
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
})

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name= "anonymous" } = req.query;
  req.session.name= name;
  if (name === "anonymous"){
  req.flash("error", "user not registered");
}else{
    req.flash("success", "user registerd successfullyy!");
}
  res.redirect("/hello"); 
});

app.get("/hello", (req,res)=>{
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  res.render("page.ejs",{name: req.session.name });
});


/*
app.get("/reqcount", (req, res)=>{
  req.session.count = 1;
  res.send (`You send a request ${req.session.count} times`);
});


app.get("/test", (req,res)=>{
  res.send("test successful!");
});



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
*/


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
