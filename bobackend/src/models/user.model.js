const mongoose = require("mongoose");

// add city model schemas

const addcitySchemas = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    City: { type: String, required: true },
    Address: { type: String, required: true },
    Capacity: { type: Number, required: true },
    Costperday: { type: Number, required: true,minlength:0,maxlength:6},
    Verified: { type: String, required: true },
    Rating: { type: Number, required: true, minlength: 0, maxlength: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const City = mongoose.model("City", addcitySchemas);

module.exports = { City };
