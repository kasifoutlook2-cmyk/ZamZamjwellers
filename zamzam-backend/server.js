const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(express.static(__dirname));
// =====================
// ✅ ENSURE UPLOAD FOLDER EXISTS
// =====================
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// =====================
// MongoDB Connect
// =====================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

// =====================
// MULTER
// =====================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage
}).fields([
  { name: "image", maxCount: 1 }
]);

// =====================
// SCHEMAS
// =====================

// Product
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  gender: { type: String, lowercase: true },
  metal: { type: String, lowercase: true },
  type: { type: String, lowercase: true },
  brand: { type: String, lowercase: true }
});

const Product = mongoose.model("Product", ProductSchema);

// =====================
// 🔥 PRODUCT CREATE (FIXED)
// =====================
app.post("/api/products", upload, async (req, res) => {
  try {
    console.log("FULL BODY:", req.body);
    console.log("REQ FILES:", req.files);
console.log("FIELDS:", {
  name: req.body.name,
  gender: req.body.gender,
  metal: req.body.metal,
  type: req.body.type
});
console.log("FILE:", req.file);

    const name = req.body.name || "";
const price = req.body.price || 0;
const description = req.body.description || "";
const gender = req.body.gender || "";
const metal = req.body.metal || "";
const type = req.body.type || "";
const brand = req.body.brand || "";

    const product = new Product({
      name,
      price: Number(price), // 🔥 FIX
      description,
      gender: gender?.toLowerCase(),
      metal: metal?.toLowerCase(),
      type: type?.toLowerCase(),
      brand: brand?.toLowerCase(),
      image: req.files?.image?.[0]?.filename || ""
    });

    await product.save();

    res.json({
      success: true,
      product
    });

  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// =====================
// 🔥 PRODUCT GET (FILTER FIX)
// =====================
app.get("/api/products", async (req, res) => {
  try {
    const { gender, metal, type, brand } = req.query;
    

    let filter = {};

    if (gender) filter.gender = gender.toLowerCase();
    if (metal) filter.metal = metal.toLowerCase();
    if (type) filter.type = type.toLowerCase();
    if (brand) filter.brand = brand.toLowerCase();

    console.log("FILTER:", filter);

    const data = await Product.find(filter);

    res.json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// =====================
// UPDATE
// =====================
app.put("/api/products/:id", upload, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: Number(req.body.price),
        description: req.body.description,
        gender: req.body.gender?.toLowerCase(),
        metal: req.body.metal?.toLowerCase(),
        type: req.body.type?.toLowerCase(),
        brand: req.body.brand?.toLowerCase(),
        image: req.files?.image?.[0]?.filename || req.body.image
      },
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Update Error" });
  }
});

// =====================
// DELETE
// =====================
app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete Error" });
  }
});

// =====================
// SERVER
// =====================
app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);