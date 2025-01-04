const Category = require('../models/categoryModel');

exports.createCategory = async (category) => {
  try {
    return await Category.create(category);
  } catch (err) {
    throw err;
  }
};
