const Admin = require('../models/adminModel');

exports.createAdmin = async (admin) => {
  try {
    return await Admin.create(admin);
  } catch (err) {
    throw err;
  }
};
