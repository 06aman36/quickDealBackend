const express = require("express");
const Product = require("../models/productModel"); // import schema
const router = express.Router();

// GET /products?category=mobile&brand=Samsung&minPrice=10000&maxPrice=30000
router.get("/products", async (req, res) => {
  try {
    const { category, brand, minPrice, maxPrice, rating } = req.query;

    // Build dynamic filter object
    let filter = {};

    if (category) filter.category = category;
    if (brand) filter.brand = brand;
    if (rating) filter.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter).limit(50);
    res.set("Cache-Control", "no-store");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
