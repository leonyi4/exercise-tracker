const Activity = require("../models/activity");
const User = require("../models/user");
const mongoose = require("mongoose");

exports.postActivity = (req, res, next) => {
  console.log(req.body);
  const exerciseType = req.body.exerciseType;
  const exerciseData = req.body.exerciseData;
  const userId = req.user;

  const activity = new Activity({
    exerciseType: exerciseType,
    exerciseData: exerciseData,
    userId: userId,
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

exports.getActivities = (req, res, next) => {
  Activity.find()
    .then((activities) => {
      res
        .status(200)
        .json({ messge: "activities sent", activities: activities });
    })
    .catch((err) => console.log(err));
};

// exports.getActivity = (req, res, next) => {
//   const activityId = req.param.activityId;
// };
