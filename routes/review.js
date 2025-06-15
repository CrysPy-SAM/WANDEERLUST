const express = require("express");
const router = express.Router();

//Reviews
//Post Route 
router.post("/listings/:id/reviews", validateReview,wrapAsync (async (req, res) => {
let listing= await Listing.findById(req.params.id);
let newReview = new Review(req.body.review);

listing.reviews.push(newReview);
await newReview.save();
await listing.save();

console.log("new review saved");
  res.redirect(`/listings/${req.params.id}`);
}));

//Delete review Route
router.delete('/listings/:id/reviews/:reviewId', async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
});
