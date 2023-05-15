const mongoose = require("mongoose");
let bookSchema = mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  description: String,
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
