const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`${delta}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellooo! How's it going??");
});
app.get("/friends", (req, res) => {
  res.status(200).json(friends);
  const url = req.url;
});

app.get("/friends/:friend_id", (req, res) => {
  const friend_id = Number(req.params.friend_id);
  const friend = friends[friend_id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "missing fiend name",
    });
  }

  const input_friend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(input_friend);

  res.status(200).json(friends);
});

app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessages);

app.listen(PORT, () => {
  console.log("Server is listening on Port 3000");
});
