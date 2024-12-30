const MerchantNationalData = require('../models/merchantNationalDataModel');

exports.createMerchantNationalData = async (nationalData) => {
  try {
    return await MerchantNationalData.create(nationalData);
  } catch (err) {
    throw err;
  }
};
