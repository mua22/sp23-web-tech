const mongoose = require("mongoose");
let toySchema = mongoose.Schema({
  title: String,
  price: Number,
});
const Toy = mongoose.model("Toy", toySchema);
module.exports = Toy;
