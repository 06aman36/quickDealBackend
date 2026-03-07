const express = require("express");
const Mobile = require("../models/productModel"); // import schema
const router = express.Router();

// GET all products from the collection
// router.get("/mobiles", async (req, res) => {
//   try {
//     const products = await Product.find(); // fetch all documents
//     res.json(products);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     res.status(500).json({ error: "Server error", details: err.message });
//   }
// });
router.get("/mobiles", async (req, res) => {
  try {
    const products = await Mobile.find();
    res.set("Cache-Control", "no-store");
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;
