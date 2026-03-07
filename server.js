const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const Mobile = require("./src/models/productModel"); // your schema
const productRout = require("./src/routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/quickDeal")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB connection error:", err.message));

// Correct route path
// app.get("/api/mobiles", async (req, res) => {
//   try {
//     const products = await Mobile.find();
//     res.set("Cache-Control", "no-store");
//     res.json(products);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     res.status(500).json({ error: "Server error", details: err.message });
//   }
// });
app.get("/api/mobiles", productRout);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
