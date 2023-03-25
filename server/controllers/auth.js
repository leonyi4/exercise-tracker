const bcrypt = require("bcryptjs");
const activity = require("../models/activity");

const User = require("../models/user");

// exports.getLogin = (req, res, next) => {
//     res.status(200).message{

//     }
// };

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(400).json({ message: "account already exists" });
    }
    bcrypt.compare(password, user.password).then((match) => {
      console.log(match);
      if (match) {
        req.session.isLoggedIn = true;
        req.session.user = user;
        console.log("a");

        return req.session.save((err) => {
          console.log(req.session._id);
          return res.send({ message: "login success", session: req.session });
        });
      }
    });
  });
};

exports.postRegister = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmedPassword = req.body.confirmedPassword;
  const activities = req.body.activities;
  const name = req.body.name;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ message: "account already exists" });
      }
      if (confirmedPassword !== password) {
        console.log(confirmedPassword);
        console.log(password);
        console.log("a");
        return res.status(401).json({ message: "passwords don't match" });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email: email,
            password: hashedPassword,
            name: name,
            activities: [],
          });

          return user.save();
        })
        .then((result) => {
          console.log("account created");
          res.status(200).json({ message: "account successfully created" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destory((err) => {
    console.log(err);
    console.log("logged out");
    res.status(200).json({ message: "logged out" });
  });
};
