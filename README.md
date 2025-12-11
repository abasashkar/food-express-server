# E-Commerce Backend (Node.js + Express + MongoDB)

This is the **backend server** for the e-commerce application, built with **Node.js**, **Express**, and **MongoDB**.  
It provides APIs for managing products, including adding, fetching, and filtering products.

---

## Features

- **Add New Product**  
  - POST `/api/products/add`  
  - Fields: `name`, `image`, `price`, `Gender`, `Category`, `description`, `size`  
  - Validates required fields and stores product in MongoDB

- **Get Products**  
  - GET `/api/products`  
  - Supports optional query parameters:
    - `name` – Search by product name (partial, case-insensitive)
    - `Category` – Filter by category
    - `Gender` – Filter by gender
    - `minPrice` / `maxPrice` – Filter by price range

- **Static File Serving**  
  - Serves files from `/uploads` for product images

- **CORS Enabled**  
  - Allows requests from any origin

- **Basic Server Check**  
  - GET `/` returns `"Backend running successfully!"`

---

## Installation

### Prerequisites

- Node.js (>=14)  
- npm or yarn  
- MongoDB database  
- `.env` file with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
