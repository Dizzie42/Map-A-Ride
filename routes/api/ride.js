const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../../middleware/index");
const {
  create,
  rideById,
  read,
  list,
  remove,
  update
} = require("../../controllers/ride");

router.get("/ride/:rideId", isLoggedIn, read);
router.post("/ride/create", isLoggedIn, create);
router.delete("/ride/:rideId", isLoggedIn, remove);
router.put("/ride/:rideId", isLoggedIn, update);
router.post("/rides", isLoggedIn, list);

router.param("rideId", rideById);

module.exports = router;
