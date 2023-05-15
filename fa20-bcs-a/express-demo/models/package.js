let mongoose = require("mongoose");
let packageSchema = mongoose.Schema({
  name: String,
  details: String,
});
let Package = mongoose.model("Package", packageSchema);
module.exports = Package;
