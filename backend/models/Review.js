import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User schema
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Reference to Product schema
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;