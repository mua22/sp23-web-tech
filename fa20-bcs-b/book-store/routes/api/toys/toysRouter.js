const express = require("express");
const router = express.Router();
const Toy = require("../../../models/toy");
router.get("/:id", async (req, res) => {
  let toy = await Toy.findById(req.params.id);
  res.send(toy);
});
router.delete("/:id", async (req, res) => {
  let toy = await Toy.findByIdAndDelete(req.params.id);

  res.send(toy);
});
router.put("/:id", async (req, res) => {
  let toy = await Toy.findById(req.params.id);
  toy.title = req.body.title;
  toy.price = req.body.price;

  await toy.save();
  res.send(toy);
});

router.get("/", async (req, res) => {
  let toys = await Toy.find();
  res.send(toys);
});
router.post("/", async (req, res) => {
  let newtoy = new Toy(req.body);
  await newtoy.save();
  res.send(newtoy);
});

module.exports = router;
