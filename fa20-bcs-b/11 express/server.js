const express = require("express");
let server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");
server.get("/hobbies.html", (req, res) => {
  res.render("hobbies");
});
server.get("/", (req, res) => {
  res.render("homepage");
});
server.listen(4000);
