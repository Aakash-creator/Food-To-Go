const express = require("express");
const router = express.Router();
const UserSignupModel = require("../../models/user/UserSignup.Model");

router.get("/", (req, res) => {
  res.send("This is a user signup page ");
});

router.post("/", checkusr, (req, res) => {
  UserSignupModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
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
