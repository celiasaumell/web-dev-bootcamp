const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

places[Math.floor(Math.random() * places.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10
    const camp = new Campground({
      author: "6045777d581cd633ac04fffa",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec. Purus in massa tempor nec. Sit amet consectetur adipiscing elit. Id aliquet risus feugiat in. Nibh tellus molestie nunc non blandit massa enim nec. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Dictum sit amet justo donec enim diam vulputate ut. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Tortor aliquam nulla facilisi cras fermentum odio. Sed turpis tincidunt id aliquet risus feugiat. Ornare arcu dui vivamus arcu felis bibendum. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Volutpat sed cras ornare arcu dui vivamus. Mus mauris vitae ultricies leo integer malesuada nunc vel. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Quis vel eros donec ac. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.",
      price,      
      });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
