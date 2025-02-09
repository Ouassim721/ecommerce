import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true }, // Reference to Order schema
    paymentStatus: { type: String, required: true }, // E.g., Success, Failed, Pending
    transactionId: { type: String }, // Payment transaction ID
    paymentDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;