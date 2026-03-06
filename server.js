const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 80000,
    category: "Mobile"
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 70000,
    category: "Mobile"
  },
  {
    id: 3,
    name: "MacBook Air",
    price: 120000,
    category: "Laptop"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});