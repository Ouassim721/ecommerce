import Payment from "../models/Payment.js"; // Assuming Payment model is created

export const createPayment = async (req, res) => {
  const { orderId, paymentMethod, paymentStatus, transactionId } = req.body;
  try {
    const payment = new Payment({ orderId, paymentMethod, paymentStatus, transactionId });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};