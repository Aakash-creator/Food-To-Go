const express = require("express");
const router = express.Router();
const { authUser } = require("../../controllers/UserLoginCtrlr");

router.get("/", (res, req) => {
  res.send("This is a user login page ");
});

router.post("/", authUser);

module.exports = router;
