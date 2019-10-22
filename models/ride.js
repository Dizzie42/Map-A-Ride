const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creates a LineString Schema for the bike rides
const RideSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  waypoints: {
    type: [[Number]],
    required: true
  },
  totalDistance: {
    type: Number
  },
  totalTime: {
    type: Number
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Ride", RideSchema);
