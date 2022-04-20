const { Router } = require("express");
const router = Router();

const users = require("../json/users.json");

router.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router;