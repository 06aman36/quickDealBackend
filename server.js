const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const Mobile = require("./src/models/productModel"); // your schema
const Product = require("./src/models/productModel");
const productRout = require("./src/routes/productRoutes");

const app = express();
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; connect-src 'self' http://localhost:5000; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'"
  );
  next();
});
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/quickDeal")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB connection error:", err.message));

// app.get("/api", productRout);
app.get("/api/products", async (req, res) => {
  try {
    const { category, brand, minPrice, maxPrice, rating } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (brand) filter.brand = brand;
    if (rating) filter.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    console.log("filter", filter);

    const products = await Product.find(filter).limit(50);
    res.set("Cache-Control", "no-store");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
