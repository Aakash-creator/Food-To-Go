const express = require("express");
const router = express.Router();

// this should show the main admin dasboard

router.get("/", (req, res) => {
  res.send("this is a admin get dashboard");
});

router.post("/", (req, res) => {
  res.send("this is a admin post dashboard");
});

router.put("/", (req, res) => {
  res.send("this is a admin put dashboard");
});

router.delete("/", (req, res) => {
  res.send("this is a admin delete dashboard");
});

module.exports = router;
