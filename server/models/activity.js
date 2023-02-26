const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  exerciseType: {
    type: String,
    required: true,
  },
  exerciseData: {
    type: Object,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
