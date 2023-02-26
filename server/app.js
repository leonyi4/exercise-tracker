const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use((req, res, next) => {
  console.log("a");
  next();
});

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then((res) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
