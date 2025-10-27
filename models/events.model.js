const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String
  }
});

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    eventStartTime: {
      type: String,
      required: true,
    },
    eventEndTime: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },
    eventImageUrl: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    dressCode: {
      type: String,
      default: "Casual",
    },
    ageRestrictions: {
      type: String,
      default: "All ages",
    },
    eventTags: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    speakers: [speakerSchema],
  },
  {
    timestamps: true,
  }
);

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;
