const mongoose = require("mongoose");

// add security with dotenv
mongoose
  .connect(
    "mongodb+srv://marielise:checkRaise42@winamaxdatabase.pfovm.mongodb.net/random-bot?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
