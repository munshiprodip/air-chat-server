const express = require("express");
const router = express.Router();

// import controllers
const {
  addMessage,
  updateMessage,
} = require("../controllers/messageController");
// import middlewares
//const { checkUserExists } = require("../middleware/userMiddleware");

router.post("/new-message", addMessage);
router.put("/update/:id", updateMessage);

module.exports = router;
