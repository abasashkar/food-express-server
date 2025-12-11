const express = require("express");
const router = express.Router();
const Product = require("../models/product");


// Add new product
router.post("/add", async (req, res) => {
  console.log("POST /add hit"); 
  console.log("Body:", req.body);

  try {
    const { name, image, price,Gender,Category,description } = req.body;

    if (!name || !image || !price || !Gender || !Category|| description||!size) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = new Product({ name, image, price,Gender,Category,description,size });
    await newProduct.save();

    res.json({ message: "Product added successfully!", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


// Get all products
// Get all products + Search
router.get("/", async (req, res) => {
  try {
    const { name, Category, Gender, minPrice, maxPrice } = req.query;

    let filter = {};

    // Search by name (partial match)
    if (name) {
      filter.name = { $regex: name, $options: "i" }; // case-insensitive
    }

    // Filter by category
    if (Category) {
      filter.Category = Category;
    }

    // Filter by gender
    if (Gender) {
      filter.Gender = Gender;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = minPrice;
      if (maxPrice) filter.price.$lte = maxPrice;
    }

    const products = await Product.find(filter);
    res.json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
