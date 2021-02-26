const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const CampgroundSchema = new Schema({
  title: {
    type: String,
  },
  image: {
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
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if(doc){
    await Review.deleteMany({
      _id: {
        $in: doc.reviews
      }
    })
  }
});
module.exports = mongoose.model("Campground", CampgroundSchema);
