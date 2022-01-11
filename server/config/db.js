const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Failed to connect to MongoDB"));
