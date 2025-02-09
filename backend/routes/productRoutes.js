import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect, admin } from '../middlewares/authMiddleware.js'; // For authentication and admin authorization

const router = express.Router();

// Public Routes
router.get("/", getProducts);

// Admin Routes (Protected)
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

export default router;