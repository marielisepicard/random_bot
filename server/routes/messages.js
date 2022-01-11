const express = require("express");
const router = express.Router();

const messageCtrl = require("../controllers/messages");

router.get("/:id", messageCtrl.getConversation);
router.post("/", messageCtrl.postMessage);
router.delete("/:id", messageCtrl.deleteConversation);

router.get("*", messageCtrl.wrongRequest);
router.post("*", messageCtrl.wrongRequest);
router.delete("*", messageCtrl.wrongRequest);
router.put("*", messageCtrl.wrongRequest);

module.exports = router;
