const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  details: String,
  isPublished: Boolean,
});
let Model = mongoose.model("Destination", modelSchema);
module.exports = Model;
