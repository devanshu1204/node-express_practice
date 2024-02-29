function getMessages(req, res) {
  res.send("<ul><li>Hello these are messages</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
