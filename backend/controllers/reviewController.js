import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const { productId, userId, rating, comment } = req.body;
  try {
    const review = new Review({ productId, userId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getReviews = async (req, res) => {
  const { productId } = req.params;
  try {
    const reviews = await Review.find({ productId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};