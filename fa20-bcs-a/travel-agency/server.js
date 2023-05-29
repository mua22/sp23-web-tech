const express = require("express");
let app = express();
var expressLayouts = require("express-ejs-layouts");
var cookieParser = require("cookie-parser");
var session = require("express-session");
app.use((req, res, next) => {
  // res.send("site is down for maintenance");
  console.log(req.url);
  next();
});
app.use(express.json());
app.use(express.urlencoded());
app.use(expressLayouts);
app.use(cookieParser());
app.use(
  session({
    secret: "My Top Secret String",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(require("./middlewares/checkSession"));
app.set("view engine", "ejs");
app.use("/", require("./routes/api/destinations"));
app.use("/", require("./routes/api/restaurants"));
app.use("/", require("./routes/deals"));

app.use("/", require("./routes/auth"));

app.get("/cookie-test", (req, res) => {
  let visit = req.cookies["page-visits"];
  if (!visit) visit = 1;
  else visit = Number(visit) + 1;
  res.cookie("page-visits", visit);
  return res.send("You Visited: " + visit + " Times");
});
app.get("/", (req, res) => {
  res.render("homepage");
});
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(4000, () => {
  console.log("Server Started");
});
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/travel-agency", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo ...."))
  .catch((error) => console.log(error.message));
