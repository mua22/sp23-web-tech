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

app.get("/", (req, res) => {
  console.log("Req Received for homepage");
  res.render("homepage", { pageTitle: "FA20Travels" });
});

let port = 4000;
app.listen(port, () => {
  //this is a callback which will be executed when the server is successfully started.
  console.log(
    "Expres Server Started at port " +
      port +
      ". access your app at localhost:" +
      port
  );
});
