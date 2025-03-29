const express = require("express");
const { createmessage, getMessages, Findmessage, Deletmessage } = require("../controllers/message.controller");

const messageRote = express.Router();

messageRote.post("/createMessage", createmessage)
messageRote.get("/getMessages", getMessages)
// messageRote.post("/FindMessage", Findmessage)
// messageRote.delete("/Deletmessage", Deletmessage)

module.exports = messageRote