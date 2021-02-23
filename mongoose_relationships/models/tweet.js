const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb://localhost/relationshipDemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongo connection open!");
});

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   //const user = new User({ username: "ilovecats55", age: 22 });
//   const user = await User.findOne({ username: "ilovecats55" });
//   const tweet2 = new Tweet({ text: "WOWWWWWW look what mittens did! LOL", likes: 255 });
//   tweet2.user = user;
//   await tweet2.save();
// };

// makeTweets();
const findTweet = async () => {
  const t = await Tweet.find({}).populate(
    "user",
    "username"
  );
  console.log(t);
};

findTweet();
