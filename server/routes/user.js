const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getUser);

router.post("*", userCtrl.wrongRequest);
router.get("*", userCtrl.wrongRequest);
router.delete("*", userCtrl.wrongRequest);
router.put("*", userCtrl.wrongRequest);

module.exports = router;
