const express = require('express');
const router = express.Router();

const authRouter = require("./auth");
router.use("/auth", authRouter);

const purchaseRouter = require("./purchase");
router.use("/purchase", purchaseRouter)

module.exports = router;