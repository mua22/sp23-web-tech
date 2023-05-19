const express = require("express");
let app = express();
var expressLayouts = require("express-ejs-layouts");
app.use(express.json());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use("/", require("./routes/api/destinations"));
app.use("/", require("./routes/api/restaurants"));
app.use("/", require("./routes/deals"));

app.get("/login", (req, res) => {
  res.render("auth/login", {});
});
app.get("/", (req, res) => {
  res.render("homepage");
});

app.listen(4000, () => {
  console.log("Server Started");
});
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/travel-agency", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo ...."))
  .catch((error) => console.log(error.message));
