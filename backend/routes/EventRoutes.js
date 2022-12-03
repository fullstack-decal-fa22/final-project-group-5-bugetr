const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/EventController");
 
router.route("/").get(getAllEvents).post(createEvent);
router.route("/:id").get(getEventById).put(updateEvent).delete(deleteEvent);
 
module.exports = router;