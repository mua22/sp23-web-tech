const mongoose = require("mongoose");
let bookSchema = mongoose.Schema({
  title: String,
  author: String,

  description: String,
  price: Number,
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
