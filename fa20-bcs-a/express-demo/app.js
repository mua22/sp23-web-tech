const express = require("express");
// express is a function which we use to create a server
let app = express();
var expressLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static("public"));

// app.get("/public/css/mystyles.css", (req, res) => {
//   res.send("What are you looking for");
// });

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});
app.use("/", require("./routes/site/homepage-router"));

let port = 4000;
app.listen(port, () => {
  //this is a callback which will be executed when the server is successfully started.
  console.log(
    "Expres Server Started at port " +
      port +
      ". access your app at http://localhost:" +
      port
  );
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/fa22a-destinations", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));
