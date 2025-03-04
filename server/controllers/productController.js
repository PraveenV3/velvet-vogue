const asyncHandler = require('express-async-handler');
const Product = require('../models/product');

// @desc    Fetch all products
// @route   GET /api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
module.exports = { getProducts };