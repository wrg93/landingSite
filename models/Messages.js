const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
  name: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  },
});

const Messages = mongoose.model("Messages", MessagesSchema);

module.exports = Messages;