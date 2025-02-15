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
  const { name, price, category, stock } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      category,
      stock,
    });

    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { name, price, category, stock } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      name,
      price,
      category,
      stock,
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