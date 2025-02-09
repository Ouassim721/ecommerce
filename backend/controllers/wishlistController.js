import Wishlist from "../models/Wishlist.js"; // Assuming Wishlist model is created

export const addToWishlist = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      const newWishlist = new Wishlist({ user: userId, products: [productId] });
      await newWishlist.save();
      res.status(201).json(newWishlist);
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
        await wishlist.save();
      }
      res.status(200).json(wishlist);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getWishlist = async (req, res) => {
  const { userId } = req.params;
  try {
    const wishlist = await Wishlist.findOne({ user: userId }).populate("products");
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};