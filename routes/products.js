const express = require("express");
const {
  getProducts,
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");
const router = express.Router();

// /api/products
router.get("/", getProducts);

// /api/products/:id
router.get("/:id", getProduct);

// /api/products
router.post("/", addProduct);

// // /api/products
router.delete("/:id", deleteProduct);

// // /api/products
router.put("/:id", updateProduct);

module.exports = router;
