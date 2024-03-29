const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

require("dotenv").config();

const User = require("./models/user");

const viewRoutes = require("./routes/view");
const authRoutes = require("./routes/auth");

const app = express();
const store = new MongoDBStore({
  uri: process.env.MONGO_CONNECTION,
  collection: "sessions",
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "yeeet",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res, next) => {
  next();
});

app.use(viewRoutes);
app.use(authRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then((res) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
