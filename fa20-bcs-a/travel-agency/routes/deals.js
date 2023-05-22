const express = require("express");
let router = express.Router();
let Deal = require("../models/Deal");

router.get("/deals/cart", async (req, res) => {
  let cart = req.cookies["cart"];
  if (!cart) cart = [];
  let deals = await Deal.find({ _id: { $in: cart } });
  let total = 0;
  for (let index = 0; index < deals.length; index++) {
    total += deals[index].price;
  }
  return res.render("cart", { deals, total });
});
router.get("/deals/remove-from-cart/:id", (req, res) => {
  let cart = req.cookies["cart"];
  if (!cart) cart = [];
  let index = cart.find((c) => c == req.params.id);
  cart.splice(index, 1);

  res.cookie("cart", cart);
  return res.redirect("back");
});
router.get("/deals/add-to-cart/:id", (req, res) => {
  let cart = req.cookies["cart"];
  if (!cart) cart = [];
  cart.push(req.params.id);
  res.cookie("cart", cart);
  return res.redirect("back");
});
router.get("/deals", async (req, res) => {
  let deals = await Deal.find();
  //   return res.send(deals);
  res.render("deals/index", {
    deals,
    pageTitle: "Top Deals Set From Router",
  });
});
module.exports = router;
