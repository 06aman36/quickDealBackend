const mongoose = require("mongoose"); // ✅ correct

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    brand: String,
    about: String,
    specifications: {
      display: {
        size: String,
        type: String,
        resolution: String,
        refresh_rate: String
      },
      processor: String,
      ram: String,
      storage: String,
      battery: {
        capacity: String,
        charging: String
      },
      camera: {
        rear: String,
        front: String,
        features: String
      },
      os: String,
      connectivity: String
    },
    images: [
      {
        url: String,
        alt: String
      }
    ],
    reviews: [
      {
        user: String,
        rating: String,
        comment: String
      }
    ]
  });

module.exports = mongoose.model("Mobile", productSchema);