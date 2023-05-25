const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book");
var cookieParser = require("cookie-parser");
var expressLayouts = require("express-ejs-layouts");
let app = express();
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(cookieParser());
app.use("/api/books", require("./routes/api/books/booksRouter"));
app.use("/api/toys", require("./routes/api/toys/toysRouter"));
app.use("/", require("./routes/books"));
app.get("/login", (req, res) => {
  res.render("auth/login");
});
app.get("/contact-us", (req, res) => {
  //   res.send("Hello");
  res.render("contact-us");
});
app.get("/cart", async (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  let books = await Book.find({ _id: { $in: cart } });
  let total = 0;
  books.forEach((b) => {
    total += Number(b.price);
  });
  return res.render("cart", { books, total });
});
app.get("/cookie-test", (req, res) => {
  let views = req.cookies.views ? req.cookies.views : 0;
  views = Number(views) + 1;
  res.cookie("views", views);
  return res.send(`You Visited ${views} times`);
});

app.get("/", (req, res) => {
  //   res.send("Hello");
  res.render("homepage");
});

let port = 4000;
app.listen(port, () => {
  //this is a call back function which will be executed when the express app started listening
  console.log(`App Listening on localhost:` + port);
});
let connectionString = "mongodb://localhost/fa20-b-bookstore";
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected: " + connectionString);
  })
  .catch(() => {
    console.log("unable to connect");
  });
