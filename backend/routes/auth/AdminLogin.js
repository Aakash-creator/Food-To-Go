const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is a admin login page ");
});

router.post("/", (req, res) => {
  res.send("this is a admin post login");
});

module.exports = router;
