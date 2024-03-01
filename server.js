const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friends_router = require("./routes/friends.router");
const messages_router = require("./routes/messages.router");

const app = express();

const PORT = 3000;

//middleware 1
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`${delta}`);
});

//middleware 2
app.use(express.json());

app.use("/friends", friends_router);

app.use("/messages", messages_router);

//server
app.get("/", (req, res) => {
  res.send("Hellooo! How's it going??");
});

//Friends endpoints

//Messages endpoints

app.listen(PORT, () => {
  console.log("Server is listening on Port 3000");
});
