const express = require("express");
const router = express.Router();

// import controllers
const { addUser, getAllUsers } = require("../controllers/userController");
const { checkLogin } = require("../middleware/authMiddleware");
// import middlewares
const { checkUserExists } = require("../middleware/userMiddleware");

router.post("/", checkUserExists, addUser);
router.get("/get-all-users", checkLogin, getAllUsers);

module.exports = router;
