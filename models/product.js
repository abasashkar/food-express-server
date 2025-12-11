const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
    Gender: {
    type: String,
    required: true,
  },
     Category: {
    type: String,
    required: true,
  },
   description:{
    type:String,
    required:true
   },
   size:{
    type:String,
    required:true
   }

});

module.exports = mongoose.model("Product", productSchema);
