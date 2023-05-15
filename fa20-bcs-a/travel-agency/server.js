const express = require("express");
let app = express();

app.use(express.json());

app.use("/", require("./routes/api/destinations"));
app.use("/", require("./routes/api/restaurants"));
app.listen(4000);
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/travel-agency", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo ...."))
  .catch((error) => console.log(error.message));
