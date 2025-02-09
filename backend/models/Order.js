import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User schema
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference to Product schema
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: { type: String, required: true },
    status: { type: String, default: "Pending" }, // Pending, Shipped, Delivered, etc.
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, required: true }, // E.g., Credit Card, PayPal
    paymentStatus: { type: String, default: "Pending" }, // E.g., Pending, Completed
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;