const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("../models/review.js");

const validateListing = (req,res,next)=>{
  let {error} = listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  }
};

//Reviews
//Post Route 
router.post("/", validateReview,wrapAsync (async (req, res) => {
let listing= await Listing.findById(req.params.id);
let newReview = new Review(req.body.review);

listing.reviews.push(newReview);
await newReview.save();
await listing.save();

console.log("new review saved");
  res.redirect(`/listings/${req.params.id}`);
}));

//Delete review Route
router.delete("/:reviewId", async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
});
