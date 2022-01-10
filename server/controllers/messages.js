const User = require("../models/User");
const utils = require("../utils/utils");

exports.getConversation = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ Error: "Pseudo parameter is missing" });
  }
  const user = await User.findOne({ id: id });
  if (!user) {
    return res.status(404).json({ Error: "User with this id doesn't exist" });
  }
  if (utils.isUser(user)) {
    res.status(200).json(user.conversation);
  } else {
    res.status(500).json({ Error: "Internal error" });
  }
};

exports.postMessage = async (req, res) => {
  const { message, author, id } = req.body;

  if (!message || !author || !id) {
    return res.status(400).json({
      Error: "Body parameters are incomplete",
      Usage: "message, author and id are compulsory in the body",
    });
  }

  const user = await User.findOne({ id: id });

  if (!user) {
    return res.status(404).json({ Error: "User with this id doesn't exist" });
  }
  if (utils.isUser(user)) {
    const timestamp = Date.now();
    const newMessage = { message, author, timestamp };

    if (user.conversation.length === 50) {
      await User.updateOne({ id: id }, { $pop: { conversation: -1 } });
    }

    User.updateOne({ id: id }, { $push: { conversation: newMessage } })
      .then(() => {
        res.status(201).json(newMessage);
      })
      .catch((error) => {
        res.status(500).json("internal error");
      });
  } else {
    res.status(500).json({ Error: "Internal error" });
  }
};

exports.deleteConversation = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ Error: "Parameter id is missing" });
  }

  User.updateOne({ id: id }, { conversation: [] })
    .then(() => {
      res
        .status(204)
        .json({ Message: "Conversation has been successfully deleted" });
    })
    .catch((error) => res.status(500).json({ Error: "Internal error" }));
};

exports.wrongParameters = (req, res) => {
  res.status(404).json({
    Error: "Parameters are uncorrectly written or endpoint doesn't exist",
  });
};
