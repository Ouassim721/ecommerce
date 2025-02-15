import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js"; // Product routes
import categoryRoutes from "./routes/categoryRoutes.js"; // Category routes
import orderRoutes from "./routes/orderRoutes.js"; // Order routes
import cartRoutes from "./routes/cartRoutes.js"; // Cart routes
import paymentRoutes from "./routes/paymentRoutes.js"; // Payment routes
import reviewRoutes from "./routes/reviewRoutes.js"; // Review routes
import wishlistRoutes from "./routes/wishlistRoutes.js"; // Wishlist routes

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Registering routes
app.use("/api/users", userRoutes); // User routes
app.use("/api/products", productRoutes); // Product routes
app.use("/api/categories", categoryRoutes); // Category routes
app.use("/api/orders", orderRoutes); // Order routes
app.use("/api/carts", cartRoutes); // Cart routes
app.use("/api/payments", paymentRoutes); // Payment routes
app.use("/api/reviews", reviewRoutes); // Review routes
app.use("/api/wishlists", wishlistRoutes); // Wishlist routes

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
