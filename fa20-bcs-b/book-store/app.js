const express = require("express");
let app = express();
app.set("view engine", "ejs");

app.get("/contact-us", (req, res) => {
  //   res.send("Hello");
  res.render("contact-us");
});
app.get("/", (req, res) => {
  //   res.send("Hello");
  res.render("homepage");
});

let port = 4000;
app.listen(port, () => {
  //this is a call back function which will be executed when the express app started listening
  console.log(`App Listening on localhost:` + port);
});
