const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: [0, "Price must be positive"] },
  onSale: { type: Boolean, default: false },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Cycling Jersey" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res));
// const jersey = new Product({
//   name: "Cycling Jersey",
//   price: 40,
//   size: "S",
//   categories: ["cycling"],
// });

// jersey
//   .save()
//   .then((data) => {
//     console.log("it worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
