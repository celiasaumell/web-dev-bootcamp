const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const sessionOptions = {
  secret: "thisisnotagoodsecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(flash());

const Product = require("./models/product");
const Farm = require("./models/farm");

mongoose
  .connect("mongodb://localhost:27017/farmStand2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection is not open", err);
  });

const AppError = require("./AppError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const categories = ["fruit", "vegetable", "dairy"];

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}
// FARM ROUTES
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
});

app.get(
  "/farms",
  wrapAsync(async (req, res) => {
    const farms = await Farm.find({});
    res.render("farms/index", { farms });
  })
);

app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});

app.post(
  "/farms",
  wrapAsync(async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash("success", "Successfully made a new farm!");
    res.redirect("/farms");
  })
);

app.get(
  "/farms/:farm_id",
  wrapAsync(async (req, res, next) => {
    const { farm_id } = req.params;
    const farm = await Farm.findById(farm_id).populate("products");
    if (!farm) {
      throw new AppError(404, "Farm Not Found");
    }
    res.render("farms/show", { farm });
  })
);

app.get(
  "/farms/:farm_id/products/new",
  wrapAsync(async (req, res) => {
    const { farm_id } = req.params;
    const farm = await Farm.findById(farm_id);
    res.render("products/new", { categories, farm });
  })
);

app.post(
  "/farms/:farm_id/products",
  wrapAsync(async (req, res) => {
    const { farm_id } = req.params;
    const farm = await Farm.findById(farm_id);
    const product = new Product(req.body);
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    req.flash("success", `Successfully added ${product.name} to ${farm.name}`);
    res.redirect(`/farms/${farm_id}`);
  })
);

app.delete(
  "/farms/:farm_id",
  wrapAsync(async (req, res) => {
    const { farm_id } = req.params;
    const farm = await Farm.findByIdAndDelete(farm_id);
    res.redirect("/farms");
  })
);

// PRODUCT ROUTES
app.get(
  "/products",
  wrapAsync(async (req, res) => {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
    }
  })
);

app.get("/products/new", (req, res) => {
  res.render("products/new", { categories, farm: null });
});

app.post(
  "/products",
  wrapAsync(async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate("farm", "name");
    if (!product) {
      throw new AppError(404, "Product Not Found");
    }
    console.log(product);
    res.render("products/show", { product });
  })
);

app.get(
  "/products/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError(404, "Product Not Found");
    } else {
      res.render("products/edit", { product, categories });
    }
  })
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${updatedProduct._id}`);
  })
);

app.delete(
  "/products/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
  })
);

const handleValidationErr = (err) => {
  console.dir(err);
  return new AppError(400, `Validation failed...${err.message}`);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") err = handleValidationErr(err);
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
