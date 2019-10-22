const Ride = require("../models/ride");
const passport = require("passport");

//All middleware goes here
let middlewareObj = {};

middlewareObj.checkRideOwnership = function(req, res, next) {
  Ride.findById(req.params.id, (err, foundRide) => {
    if (err || !foundRide) {
      console.log("no ride found for " + req.params.id); //temp console log
      res.json({ error: "No ride" });
    } else {
      if (foundRide.author.id.equals(req.user._id)) {
        //if user owns ride
        next();
      }
    }
  });
};

middlewareObj.isLoggedIn = passport.authenticate("jwt", { session: false });

module.exports = middlewareObj;
