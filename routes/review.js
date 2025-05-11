const express=require("express");
const router=express.Router({ mergeParams: true });
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError");
const Review=require("../models/reviews.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const listings=require("../routes/listing.js");
const Listing=require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controller/reviews.js");
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;