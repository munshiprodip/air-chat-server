const mongoose = require("mongoose");
const messageSchema = mongoose.Schema(
  {
    conversation: {
      type: mongoose.Types.ObjectId,
      ref: "Conversation",
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },

    status: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },

    react: {
      type: Number,
      enum: [0, 1, 2, 3],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
