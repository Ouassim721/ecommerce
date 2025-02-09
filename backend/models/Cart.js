import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User schema
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference to Product schema
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;