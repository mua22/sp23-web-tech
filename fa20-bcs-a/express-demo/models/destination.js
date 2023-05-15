let mongoose = require("mongoose");
let destinationSchema = mongoose.Schema({
  name: String,
  speciality: String,
});
let Destination = mongoose.model("Destination", destinationSchema);
module.exports = Destination;
