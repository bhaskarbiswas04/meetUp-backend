const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  eventImageUrl:
    {
        type: String,
    },
});

const EventModel = mongoose.model("Events", eventSchema);
module.exports = EventModel;