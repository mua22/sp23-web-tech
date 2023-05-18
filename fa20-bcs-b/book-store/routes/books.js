const express = require("express");
const router = express.Router();
let BookModel = require("../models/book");
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
