const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: [],
});
let Model = mongoose.model("User", modelSchema);
module.exports = Model;
