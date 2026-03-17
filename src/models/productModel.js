const mongoose = require("mongoose");

const specificationSchema = new mongoose.Schema({
  display: {
    size: { type: String },
    type: { type: String },
    resolution: { type: String },
    refresh_rate: { type: String }
  },
  processor: { type: String },
  ram: { type: String },
  storage: { type: String },
  battery: {
    capacity: { type: String },
    charging: { type: String }
  },
  camera: {
    rear: { type: String },
    front: { type: String },
    features: [{ type: String }]
  },
  os: { type: String },
  connectivity: [{ type: String }],
  fabric: { type: String },
  color: { type: String },
  size: [{ type: String }],
  fit: { type: String },
  pattern: { type: String },
  sleeve: { type: String },
  neck: { type: String },
  care_instructions: { type: String },
  capacity: { type: String },
  type: { type: String },
  energy_rating: { type: String },
  features: [{ type: String }],
  dimensions: { type: String },
  warranty: { type: String }
});

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String }
});

const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  comment: { type: String }
});

const productSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    about: { type: String },
    specifications: specificationSchema,
    images: [imageSchema],
    reviews: [reviewSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);