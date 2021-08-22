const express = require("express");
const router = express.Router();

// import controllers
const { addUser } = require("../controllers/userController");
// import middlewares
const { checkUserExists } = require("../middleware/userMiddleware");

router.post("/", checkUserExists, addUser);

module.exports = router;
