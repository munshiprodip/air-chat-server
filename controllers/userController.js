const User = require("../models/User");

async function addUser(req, res, next) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    photoUrl: req.body.photoUrl,
    isOnline: 1,
  });

  // save user or send error
  try {
    const user = await newUser.save();
    res.status(200).json({
      data: {
        user: user,
      },
      message: "User was added successfully!",
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
  addUser,
};
