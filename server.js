const express = require("express");

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

app.get("/", (req, res) => {
  res.send("Hellooo Devanshu god is with you work hard");
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

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Shri krishna</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});

app.listen(PORT, () => {
  console.log("Server is listening on Port 3000");
});
