const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

const User = require("./models/user");

const viewRoutes = require("./routes/view");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  User.findById(process.env.MONGO_ID)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use(viewRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then((res) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "leo",
          age: 18,
          email: "leo@test.com",
          activities: [],
        });
        user.save();
      }
    });
    console.log("a");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
