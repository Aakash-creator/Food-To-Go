const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Food ot go on port 3000 Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
