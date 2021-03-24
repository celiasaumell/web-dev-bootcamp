const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const wrapAsync = require("../utilities/wrapAsync");
const AppError = require("../utilities/AppError");
const { isLoggedIn, isAuthor, validateCampground, getPreviousPage } = require("../utilities/middleware");
const multer = require("multer");
const {storage} = require("../cloudinary");
const upload = multer({ storage });

const Campground = require("../models/campground");

const { campgroundSchema } = require("../schemas");

router
  .route("/")
  .get(wrapAsync(campgrounds.index))
  .post(isLoggedIn, upload.array("image"), validateCampground, wrapAsync(campgrounds.createCampground));

router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router
  .route("/:id")
  .get(getPreviousPage, wrapAsync(campgrounds.showCampground))
  .put(isLoggedIn, isAuthor, upload.array("image"), validateCampground, wrapAsync(campgrounds.editCampground))
  .delete(isLoggedIn, isAuthor, wrapAsync(campgrounds.deleteCampground));

router.get("/:id/edit", isLoggedIn, isAuthor, wrapAsync(campgrounds.editCampgroundForm));

module.exports = router;
