import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", addToCart); // Add product to cart
router.post("/remove", removeFromCart); // Remove product from cart
router.get("/:userId", getCart); // Get the cart of a specific user

export default router;