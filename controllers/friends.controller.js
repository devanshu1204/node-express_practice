const friendsModel = require("../models/friends.model.js");

function getFriends(req, res) {
  res.status(200).json(friendsModel);
  const url = req.url;
}

function getFriends_byID(req, res) {
  const friend_id = Number(req.params.friend_id);
  const friend = friendsModel[friend_id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "missing fiend name",
    });
  }

  const input_friend = {
    name: req.body.name,
    id: friendsModel.length,
  };
  friendsModel.push(input_friend);

  res.status(200).json(friendsModel);
}

module.exports = {
  getFriends,
  getFriends_byID,
  postFriends,
};
