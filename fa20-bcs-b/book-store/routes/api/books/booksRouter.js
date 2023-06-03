const express = require("express");
const router = express.Router();
const Book = require("../../../models/book");
router.get("/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  res.send(book);
});
router.delete("/:id", async (req, res) => {
  let book = await Book.findByIdAndDelete(req.params.id);

  res.send(book);
});
router.put("/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  book.title = req.body.title;
  book.year = req.body.year;
  book.author = req.body.author;
  book.description = req.body.description;
  await book.save();
  res.send(book);
});

router.get("/", require("../../../middlewares/apiauth"), async (req, res) => {
  let books = await Book.find();
  res.send(books);
});
router.post("/", async (req, res) => {
  let newBook = new Book(req.body);
  await newBook.save();
  res.send(newBook);
});

module.exports = router;
