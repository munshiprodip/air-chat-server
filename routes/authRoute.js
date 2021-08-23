const express = require("express");
const router = express.Router();

// import controllers
const {
  signUp,
  login,
  getLoggedinUser,
  logout,
} = require("../controllers/authController");
const {
  loginDataValidator,
  loginDataValidatorResultHandler,
} = require("../middleware/authMiddleware");

// import middleware
const {
  userDataValidator,
  validationResultHandler,
  avatarUpload,
} = require("../middleware/userMiddleware");

router.post(
  "/signup",
  avatarUpload,
  userDataValidator,
  validationResultHandler,
  signUp
);
router.post(
  "/login",
  loginDataValidator,
  loginDataValidatorResultHandler,
  login
);
router.get("/get-login", getLoggedinUser);
router.delete("/logout", logout);

module.exports = router;
