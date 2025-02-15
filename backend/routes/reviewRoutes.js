import express from "express";
import { createReview, getReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", createReview); // Post a new review
router.get("/:productId", getReviews); // Get reviews for a product

export default router;