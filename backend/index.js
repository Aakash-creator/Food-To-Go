const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.CONNECT_DB);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Food ot go on port 3000 Hello World!");
});

// other routes

const userRoute = require("./routes/users/Users");
app.use("/users", userRoute);

const adminRoute = require("./routes/admin/Admin");
app.use("/admin", adminRoute);

const adminLogin = require("./routes/auth/AdminLogin");
app.use("/admin-login", adminLogin);

const userSignup = require("./routes/auth/UserSignup");
app.use("/user-signup", userSignup);

const userLogin = require("./routes/auth/UserLogin");
app.use("/user-login", userLogin);

// handling 404 routes
app.get("*", (req, res) => {
  res.status(404).send("Page Not Available");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
