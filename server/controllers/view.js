const Activity = require("../models/activity");
const User = require("../models/user");

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
      res.status(200).json({ activities: activities });
    })
    .catch((err) => console.log(err));
};

exports.getActivity = (req, res, next) => {
  const activityId = req.params.activityId;
  Activity.findById(activityId)
    .then((activity) => {
      res.status(200).json({ activity: activity });
    })
    .catch((err) => console.log(err));
};

exports.editActivity = (req, res, next) => {
  const activityId = req.body.id;
  const updatedExerciseData = req.body.exerciseData;

  Activity.findById(activityId)
    .then((activity) => {
      activity.exerciseData = updatedExerciseData;
      return activity.save();
    })
    .then((result) => {
      console.log("updated activity!");
      res.status(200).json("updated activity");
    })
    .catch((err) => console.log(err));
};
