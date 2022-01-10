const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true },
  id: { type: String, required: true },
  conversation: {
    type: [{ author: String, message: String, timestamp: String }],
  },
});

module.exports = mongoose.model("User", userSchema);
