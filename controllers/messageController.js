const Message = require("../models/Message");

async function addMessage(req, res, next) {
  let newMessage = new Message({
    conversation: req.body.conversation,
    sender: req.body.sender,
    receiver: req.body.receiver,
    text: req.body.text,
  });

  // save user or send error
  try {
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
  addMessage,
  updateMessage,
};
