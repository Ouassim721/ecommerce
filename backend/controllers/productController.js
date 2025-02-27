import Product from '../models/Product.js';

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product (Admin only)
const createProduct = async (req, res) => {
  const { name, description, price, category, stock, image, rating } = req.body;

  try {
    // Validate required fields
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: 'Please provide all required fields (name, description, price, category).' });
    }

    const newProduct = new Product({
      name,
      description,  // Added description field
      price,
      category,
      stock,
      image,        // Optional: added image field
      rating,       // Optional: added rating field
    });

    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { name, description, price, category, stock, image, rating } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      name,
      description,  // Added description field
      price,
      category,
      stock,
      image,        // Optional: added image field
      rating,       // Optional: added rating field
    }, { new: true });

    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json({ message: "Product deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getProducts, createProduct, updateProduct, deleteProduct };
