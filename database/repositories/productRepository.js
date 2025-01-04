const Product = require('../models/productModel');

exports.createProduct = async (product) => {
  try {
    return await Product.create(product);
  } catch (err) {
    throw err;
  }
};