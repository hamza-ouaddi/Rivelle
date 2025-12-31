import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      type,
      description,
      images,
      sizes,
      isFeatured,
      author,
    } = req.body;

    if (!name || !price || !category || !type) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      type,
      description,
      images,
      sizes,
      isFeatured,
      author: author || req.user.id,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};
