const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
    minimum: 0,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("Campground", CampgroundSchema);
