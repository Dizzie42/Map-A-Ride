const Ride = require("../models/ride");

// CRUD FOR THE RIDE MODEL
// GET THE RIDE BY ID
exports.rideById = (req, res, next, id) => {
  Ride.findById(id).exec((err, ride) => {
    if (err || !ride) {
      return res.status(400).json({
        error: "Ride not found!"
      });
    }
    req.ride = ride;
    next();
  });
};

//GET A SINGLE RIDE
exports.read = (req, res) => {
  return res.json(req.ride);
};

/// CREATE A RIDE
exports.create = (req, res) => {
  req.body.user = req.user._id;
  const ride = new Ride(req.body);
  ride.save((err, ride) => {
    if (err) {
      return res.status(400).json({
        err: err
      });
    }
    res.json({
      ride
    });
  });
};

// INDEX GET ALL THE RIDES
exports.list = (req, res) => {
  let user = req.user._id;
  Ride.find({ user }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        err: err
      });
    }
    res.json(data);
  });
};

// DELETE A RIDE
exports.remove = (req, res) => {
  let ride = req.ride;
  ride.remove((err, deletedRide) => {
    if (err) {
      return res.status(400).json({
        err: err
      });
    }
    res.json({
      message: "Ride deleted successfuly"
    });
  });
};

// UPDATE A RIDE
exports.update = (req, res) => {
  const ride = req.ride;
  ride.title = req.body.title;
  ride.waypoints = req.body.waypoints;
  ride.totalDistance = req.body.totalDistance;
  ride.totalTime = req.body.totalTime;

  ride.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json(data);
  });
};
