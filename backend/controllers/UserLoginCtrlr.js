const UserSignupModel = require("../models/user/UserSignup.Model");
const bcrypt = require("bcrypt");

// Authenticate user

const authUser = async (req, res) => {
  const { usremail, usrpassword } = req.body;
  await UserSignupModel.findOne({ usremail: usremail }).then((user) => {
    if (user) {
      bcrypt.compare(usrpassword, user.usrpassword, (err, response) => {
        if (response) {
          res.json("Success");
        } else {
          res.json("Password Incorrect");
        }
      });
    } else {
      res.json("User Not Registered");
    }
  });
};

module.exports = {
  authUser,
};
