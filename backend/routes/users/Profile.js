const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is a Profile get dashboard");
});

router.post("/", (req, res) => {
  res.send("this is a Users post dashboard");
});

router.put("/", (req, res) => {
  res.send("this is a Users put dashboard");
});

router.delete("/", (req, res) => {
  res.send("this is a Users delete dashboard");
});

module.exports = router;
