const express = require("express");
const router = express.Router();
let BookModel = require("../models/book");
router.get("/books/add", (req, res) => {
  res.render("books/book-form");
});
router.post("/books/add", async (req, res) => {
  let book = new BookModel(req.body);
  await book.save();
  // return res.send("record saved");
  res.redirect("/books");
});
router.get("/books/delete/:id", async (req, res) => {
  let book = await BookModel.findByIdAndDelete(req.params.id);
  res.redirect("/books");
});
router.get("/books/edit/:id", async (req, res) => {
  let book = await BookModel.findById(req.params.id);
  res.render("books/book-edit-form", { book });
});
router.post("/books/edit/:id", async (req, res) => {
  let book = await BookModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/books");
});
router.get("/books/:id", async (req, res) => {
  let book = await BookModel.findById(req.params.id);
  res.render("books/books-single", { book });
});

router.get("/books/", async (req, res) => {
  // let books = [{ title: "OS" }, { title: "Web" }];
  let books = await BookModel.find();
  console.log(books);
  // res.send(books); // this is how you send data
  // return res.send(books);
  res.render("books/books", { books });
});
module.exports = router;
