const express = require("express");
const Destination = require("../../models/Destination");
let router = express.Router();
router.post("/api/destinations", async function (req, res) {
  let record = new Destination(req.body);
  await record.save();
  res.send(record);
});

router.put("/api/destinations/:id", async function (req, res) {
  //   return res.send(req.body);
  let record = await Destination.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(record);
});
router.delete("/api/destinations/:id", async function (req, res) {
  let record = await Destination.findByIdAndDelete(req.params.id);
  res.send("Done");
});
router.get("/api/destinations/:id", async function (req, res) {
  let record = await Destination.findById(req.params.id);
  res.send(record);
});
router.get("/api/destinations", async function (req, res) {
  let records = await Destination.find();
  res.send(records);
});

module.exports = router;
