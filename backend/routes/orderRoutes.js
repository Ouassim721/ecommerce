import express from "express";
import { createOrder, getOrders, getOrderById } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder); // Create a new order
router.get("/", getOrders); // Get all orders (admin route)
router.get("/:id", getOrderById); // Get an order by ID

export default router;
