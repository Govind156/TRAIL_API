const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the review schema
const reviewSchema = new Schema({
  reviewId: {
    type: String,
    required: true,
    unique: true
  },
  rating: {
    type: Number,
    required: true
  },
  submissionDate: {
    type: Date,
    default: Date.now
  },
  reviewText: String
});

// Create a Review model using the schema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;