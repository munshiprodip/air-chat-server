const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const User = require("../models/User");

async function addConversation(req, res, next) {
  let newConversation = new Conversation({
    creator: req.user.id,
    participant: req.body.participant_id,
  });

  //
  try {
    let conversation = await Conversation.findOne({
      $or: [
        {
          creator: req.user.id,
          participant: req.body.participant_id,
        },
        {
          creator: req.body.participant_id,
          participant: req.user.id,
        },
      ],
    });

    if (!conversation) {
      conversation = await newConversation.save();
      req.conversation = conversation;
      next();
    } else {
      req.conversation = conversation;
      next();
    }
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

async function getMessages(req, res, next) {
  //
  try {
    const receiver = await User.findOne({ _id: req.body.participant_id });
    let messages = await Message.find({ conversation: req.conversation._id });
    res.status(200).json({
      data: {
        conversation: req.conversation,
        receiver: receiver,
        messages: messages,
      },
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

async function addMessage(req, res, next) {
  let newMessage = new Message({
    conversation: req.body.conversation,
    sender: req.user.id,
    receiver: req.body.receiver,
    text: req.body.text,
  });

  // save user or send error
  try {
    global.io.emit("message-sent", newMessage);
    const message = await newMessage.save();

    res.status(200).json({
      data: {
        message: message,
      },
      message: "Message added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

async function updateMessage(req, res, next) {
  // save user or send error
  try {
    const updatedMessage = await Message.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    if (!updatedMessage) {
      res.status(500).json({
        errors: {
          common: {
            msg: "Message update failed",
          },
        },
      });
    }
    res.status(200).json({
      data: {
        message: updatedMessage,
      },
      message: "Message updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

module.exports = {
  addConversation,
  getMessages,
  addMessage,
  updateMessage,
};
