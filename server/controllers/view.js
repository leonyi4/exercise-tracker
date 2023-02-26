const Activity = require("../models/activity");
const User = require("../models/user");
const mongoose = require("mongoose");

exports.postActivity = (req, res, next) => {
  console.log(req.body);
  const exerciseType = req.body.exerciseType;
  const exerciseData = req.body.exerciseData;
  const userId = req.body.userId;

  const activity = new Activity({
    exerciseType: exerciseType,
    exerciseData: exerciseData,
    userId: new mongoose.Types.ObjectId(userId),
  });

  activity
    .save()
    .then((activity) => {
      console.log("created activity");
      res.json(activity);
    })
    .catch((err) => {
      console.log(err);
    });
};
