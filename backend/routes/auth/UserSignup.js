const express = require("express");
const router = express.Router();
const UserSignupModel = require("../../models/user/UserSignup.Model");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("This is a user signup page ");
});

router.post("/", checkusr, (req, res) => {
  const { usremail, usrpassword } = req.body;
  bcrypt
    .hash(usrpassword, 10)
    .then((hash) => {
      UserSignupModel.create({ usremail, usrpassword: hash })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
});

async function checkusr(req, res, next) {
  try {
    const { usremail } = req.body;
    const user = await UserSignupModel.findOne({ usremail: usremail });

    if (user) {
      return res.json("User Already exists");
    }

    next();
  } catch (err) {
    console.error("Error in checkusr middleware:", err);
    res.status(500).json("Internal Server Error");
  }
}

module.exports = router;
