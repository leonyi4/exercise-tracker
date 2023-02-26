const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  activities: [
    {
      activity: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Activity",
      },
    },
  ],
});

userSchema.methods.addActivity = function (activity) {
  this.activities = activity;
  console.log(activity);
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
