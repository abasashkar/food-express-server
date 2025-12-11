require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // <-- import cors


const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
