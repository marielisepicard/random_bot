const express = require("express");
const router = express.Router();

const errorCtrl = require("../controllers/error");

router.use("*", errorCtrl.wrongRequest);
module.exports = router;
