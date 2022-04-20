const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("users get");
});

module.exports = router;