const express = require("express");
const router = express.Router({ mergeParams: true });
const reviews = require("../controllers/reviews");

const AppError = require("../utilities/AppError");
const wrapAsync = require("../utilities/wrapAsync");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../utilities/middleware");

const Review = require("../models/review");
const Campground = require("../models/campground");

const { reviewSchema } = require("../schemas");

router.post("/", isLoggedIn, validateReview, wrapAsync(reviews.createReview));

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviews.deleteReview));

module.exports = router;
