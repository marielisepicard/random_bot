const express = require("express");
const router = express.Router();

const messageCtrl = require("../controllers/messages");

router.get("/:id", messageCtrl.getConversation);
router.post("/", messageCtrl.postMessage);
router.delete("/:id", messageCtrl.deleteConversation);
//router.use("*", //)

module.exports = router;
