const express = require("express");
const Restaurant = require("../../models/Restaurant");
let router = express.Router();
router.post("/api/restaurants", async function (req, res) {
  let record = new Restaurant(req.body);
  await record.save();
  res.send(record);
});

router.put("/api/restaurants/:id", async function (req, res) {
  //   return res.send(req.body);
  let record = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(record);
});
router.delete("/api/restaurants/:id", async function (req, res) {
  let record = await Restaurant.findByIdAndDelete(req.params.id);
  res.send("Done");
});
router.get("/api/restaurants/:id", async function (req, res) {
  let record = await Restaurant.findById(req.params.id);
  res.send(record);
});
router.get("/api/restaurants", async function (req, res) {
  let records = await Restaurant.find();
  res.send(records);
});

module.exports = router;
