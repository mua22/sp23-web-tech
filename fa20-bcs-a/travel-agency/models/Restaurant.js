const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
});
let Model = mongoose.model("Restaurant", modelSchema);
module.exports = Model;
