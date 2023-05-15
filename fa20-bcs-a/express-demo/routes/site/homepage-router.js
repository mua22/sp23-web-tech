const express = require("express");
let Destination = require("../../models/destination");
let router = express.Router();
router.get("/", async (req, res) => {
  console.log("Req Received for homepage");
  //   let topDestinations = [
  //     { name: "Jella Food Point", speciality: "Heart Attack" },
  //     { name: "Phajja", speciality: "Acidic Payey" },
  //     { name: "Yasir Broast", speciality: "Not Any" },
  //   ];
  let topDestinations = await Destination.find();
  res.render("homepage", { pageTitle: "FA20Travels", topDestinations });
});

module.exports = router;
