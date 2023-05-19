const express = require("express");
let router = express.Router();
let Deal = require("../models/Deal");
router.get("/deals", async (req, res) => {
  let deals = await Deal.find();
  //   return res.send(deals);
  res.render("deals/index", {
    deals,
    pageTitle: "Top Deals Set From Router",
  });
});
module.exports = router;
