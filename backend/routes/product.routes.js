import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getRelatedProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/related/:id", getRelatedProducts);
router.get("/:id", getProductById);
router.patch("/:id", verifyToken, updateProduct);
router.delete("/:id", verifyToken, deleteProduct);

export default router;
