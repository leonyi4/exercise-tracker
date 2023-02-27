const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();

const User = require("./models/user");

const viewRoutes = require("./routes/view");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
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
        });
        user.save();
      }
    });
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
