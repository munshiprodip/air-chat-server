const express = require("express");
const router = express.Router();

// import controllers
const {
  addMessage,
  updateMessage,
} = require("../controllers/messageController");

// import middlewares
const { checkLogin } = require("../middleware/authMiddleware");

router.post("/new-message", checkLogin, addMessage);
router.put("/update/:id", updateMessage);

module.exports = router;
