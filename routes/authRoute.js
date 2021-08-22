const express = require("express");
const router = express.Router();

// import controllers
const {
  signUp,
  login,
  getLoggedinUser,
} = require("../controllers/authController");

// import middleware
const {
  userDataValidator,
  validationResultHandler,
} = require("../middleware/userMiddleware");

router.post("/signup", userDataValidator, validationResultHandler, signUp);
router.post("/login", login);
router.get("/get-login", getLoggedinUser);

module.exports = router;
