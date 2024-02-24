const mongoose = require("mongoose");

const UserSignupSchema = new mongoose.Schema({
  usremail: String,
  usrpassword: String,
});

const UserSignupModel = mongoose.model("user_registration", UserSignupSchema);

module.exports = UserSignupModel;
