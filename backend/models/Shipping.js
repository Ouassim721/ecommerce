import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema(
  {
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true }, // Reference to Order schema
    shippingAddress: { type: String, required: true },
    shippingMethod: { type: String, required: true }, // E.g., Standard, Express
    shippingStatus: { type: String, default: "Not Shipped" }, // E.g., Not Shipped, In Transit, Delivered
    trackingNumber: { type: String },
    shippedDate: { type: Date },
    estimatedArrival: { type: Date },
  },
  { timestamps: true }
);

const Shipping = mongoose.model("Shipping", shippingSchema);

export default Shipping;