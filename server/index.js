const http = require("http");
const express = require("express");

require("./config/db");
const utils = require("./utils/utils");

const userRoutes = require("./routes/user");
const messagesRoutes = require("./routes/messages");
// const errorRoutes = require("./routes/errors");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/user", userRoutes);
app.use("/messages", messagesRoutes);
// app.use("*", errorRoutes);

// --- socket
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("Message", (message) => {
    // refactor
    const splitedMessage = message.split(" "); // add \n case
    let newOrder = utils.shuffleUp(utils.createArray(splitedMessage.length));
    let newMessage = utils.generateNewMessage(splitedMessage, newOrder);
    io.to(socket.id).emit("Bot", newMessage);
  });
});

server.listen(process.env.port || 3001);
