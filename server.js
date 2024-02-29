const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

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

//server
app.get("/", (req, res) => {
  res.send("Hellooo! How's it going??");
});

//Friends endpoints
app.get("/friends", friendsController.getFriends);

app.get("/friends/:friend_id", friendsController.getFriends_byID);

app.post("/friends", friendsController.postFriends);

//Messages endpoints
app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessages);

app.listen(PORT, () => {
  console.log("Server is listening on Port 3000");
});
