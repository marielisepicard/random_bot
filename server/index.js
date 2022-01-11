const http = require("http");
const express = require("express");

require("./config/db");
const utils = require("./utils/utils");

const userRoutes = require("./routes/user");
const messagesRoutes = require("./routes/messages");
const errorRoutes = require("./routes/errors");

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
app.use("*", errorRoutes);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("Message", (message) => {
    io.to(socket.id).emit("Bot", utils.shuffleString(message));
  });
});

server.listen(process.env.PORT || 3001);
