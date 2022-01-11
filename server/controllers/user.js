const md5 = require("md5");
require("dotenv").config();

const utils = require("../utils/utils");
const User = require("../models/User");

exports.createUser = (req, res) => {
  const { pseudo } = req.body;

  if (!pseudo) {
    return res.status(400).json({ Error: "Pseudo is missing in the body" });
  }

  const id = md5(pseudo + process.env.SECRET_STRING),
    user = new User({ pseudo, id, conversation: [] });
  user
    .save()
    .then(() => {
      res.status(201).json(user);
    })
    .catch((err) => res.status(500).json({ Error: "Internal error" }));
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ Error: "Pseudo parameter is missing" });
  }

  const user = await User.findOne({ id: id });
  if (!user) {
    return res.status(404).json({ Error: "User with this id doesn't exist" });
  }
  if (utils.isUser(user)) {
    res.status(200).json(user);
  } else {
    res.status(500).json({ Error: "Internal error" });
  }
};

exports.wrongParameters = async (req, res) => {
  res.status(404).json({
    Error: "Parameters are uncorrectly written or endpoint doesn't exist",
  });
};

exports.wrongRequest = (req, res) => {
  return res.status(400).json({ Error: "Wrong request" });
};
