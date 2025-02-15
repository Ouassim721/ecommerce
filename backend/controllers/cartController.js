import Cart from "../models/Cart.js"; // Assuming Cart is a separate model

export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      const newCart = new Cart({ user: userId, items: [{ product: productId, quantity }] });
      await newCart.save();
      res.status(201).json(newCart);
    } else {
      const existingItemIndex = cart.items.findIndex(item => item.product.toString() === productId);
      if (existingItemIndex >= 0) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
      res.status(200).json(cart);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
