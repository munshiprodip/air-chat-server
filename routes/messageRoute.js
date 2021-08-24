const express = require("express");
const router = express.Router();

// import controllers
const {
  addMessage,
  updateMessage,
  addConversation,
  getMessages,
} = require("../controllers/messageController");

// import middlewares
const { checkLogin } = require("../middleware/authMiddleware");

router.post("/new-conversation", checkLogin, addConversation, getMessages);
router.post("/new-message", checkLogin, addMessage);
router.put("/update/:id", updateMessage);

module.exports = router;
