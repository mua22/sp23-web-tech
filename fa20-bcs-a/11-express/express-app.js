const express = require("express");
const server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");

server.get("/contact-us.html", (req, res) => {
  res.render(`contact-us`);
});
server.get("/friends", (req, res) => {
  res.render(`friends`);
});
server.get("/", (req, res) => {
  res.render(`homepage`);
});

server.listen(3000, () => {
  console.log("Server Started, Visit localhost:3000");
});
