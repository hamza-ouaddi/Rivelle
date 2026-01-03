import Product from "../models/product.model.js";
import Review from "../models/review.model.js";

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

export const getAllProducts = async (req, res) => {
  try {
    const {
      category,
      type,
      minPrice,
      maxPrice,
      isFeatured,
      search,
      page = 1,
      limit = 12,
    } = req.query;

    const filter = {};

    if (category && category !== "all") {
      filter.category = category;
    }

    if (type && type !== "all") {
      filter.type = type;
    }

    if (isFeatured === "true") {
      filter.isFeatured = true;
    }

    if (minPrice && maxPrice) {
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
      if (!isNaN(min) && !isNaN(max)) {
        filter.price = { $gte: min, $lte: max };
      }
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    //For pagination
    const productsToSkip = (parseInt(page) - 1) * parseInt(limit);
    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / parseInt(limit));

    //To get all products with filter functionality
    const products = await Product.find(filter)
      .skip(productsToSkip)
      .limit(parseInt(limit))
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      total: totalProducts,
      page: parseInt(page),
      totalPages,
      products,
    });
  } catch (error) {
    console.error("Error fetching all products: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch all products",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).populate("author", "name email");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const reviews = await Review.find({ productId: id })
      .populate("userId", "email name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      product,
      reviews,
    });
  } catch (error) {
    console.error("Error fetch product:", error);

    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};
