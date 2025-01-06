const express = require('express');
const userRouter = require('./userRouter');
const merchantRouter = require('./merchantRouter');
const adminRouter = require('./adminRouter');
const productRouter = require('../Products/productRouter');

const authRouter = express.Router();

authRouter.use('/merchant', merchantRouter, productRouter);
authRouter.use('/admin', adminRouter, productRouter);
authRouter.use('/admin', adminRouter);

module.exports = authRouter;
