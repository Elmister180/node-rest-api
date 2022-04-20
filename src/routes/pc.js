const { Router } = require("express");
const router = Router();

const pc = require("../json/pc.json");

router.get("/pc", (req, res) => {
  res.json(pc);
});

module.exports = router;