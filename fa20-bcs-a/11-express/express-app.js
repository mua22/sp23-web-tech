const express = require("express");
const server = express();

server.use(express.static("public"));

server.listen(3000, () => {
  console.log("Server Started, Visit localhost:3000");
});
