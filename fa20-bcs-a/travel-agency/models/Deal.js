const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  title: String,
  price: Number,
  details: String,
});
let Model = mongoose.model("Deal", modelSchema);
module.exports = Model;
