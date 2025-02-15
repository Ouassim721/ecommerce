import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // Reference to Category schema
    image: { type: String }, // URL or path to the product image
    stock: { type: Number, default: 0 }, // Stock quantity
    rating: { type: Number, default: 0 }, // Product rating (can be calculated from reviews)
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User schema
        comment: { type: String },
        rating: { type: Number },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
