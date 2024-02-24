const express = require("express");
const router = express.Router();
const UserSignupModel = require("../../models/user/UserSignup.Model");

router.get("/", (req, res) => {
  res.send("This is a user login page ");
});

router.post("/", (req, res) => {
  const { usremail, usrpassword } = req.body;
  UserSignupModel.findOne({ usremail: usremail }).then((user) => {
    if (user) {
      if (user.usrpassword === usrpassword) {
        res.json("Success");
      } else {
        res.json("invalid password");
      }
    } else {
      res.json("User Not Registered");
    }
  });
});

module.exports = router;
