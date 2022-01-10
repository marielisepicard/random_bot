const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getUser);
// router.use("*", userCtrl.wrongParameters);

module.exports = router;
