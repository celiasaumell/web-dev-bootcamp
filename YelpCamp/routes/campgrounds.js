const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const wrapAsync = require("../utilities/wrapAsync");
const AppError = require("../utilities/AppError");
const { isLoggedIn, isAuthor, validateCampground } = require("../utilities/middleware");

const Campground = require("../models/campground");

const { campgroundSchema } = require("../schemas");

router.get("/", wrapAsync(campgrounds.index));

router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router.post("/", isLoggedIn, validateCampground, wrapAsync(campgrounds.createCampground));

router.get("/:id", wrapAsync(campgrounds.showCampground));

router.get("/:id/edit", isLoggedIn, isAuthor, wrapAsync(campgrounds.editCampgroundForm));

router.put("/:id", isLoggedIn, isAuthor, validateCampground, wrapAsync(campgrounds.editCampground));

router.delete("/:id", isLoggedIn, isAuthor, wrapAsync(campgrounds.deleteCampground));

module.exports = router;
