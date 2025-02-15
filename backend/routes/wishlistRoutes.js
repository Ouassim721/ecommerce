import express from "express";
import { addToWishlist, getWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

router.post("/add", addToWishlist); // Add product to wishlist
router.get("/:userId", getWishlist); // Get wishlist for a user

export default router;
