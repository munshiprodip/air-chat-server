const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function signUp(req, res, next) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    photoUrl: req.body.name,
    isOnline: 1,
  });

  // save user or send error
  try {
    const user = await newUser.save();

    const userInfo = {
      id: user._id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
    };
    const token = jwt.sign(userInfo, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    res.cookie(process.env.COOKIE_NAME, token, {
      maxAge: process.env.JWT_EXPIRATION,
      httpOnly: true,
      httpOnly: true,
      signed: true,
    });

    res.status(201).json({
      data: {
        user: userInfo,
      },
      token: token,
      message: "Registration successfully",
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

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user && user._id) {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordValid) {
        const userInfo = {
          id: user._id,
          email: user.email,
        };
        const token = jwt.sign(userInfo, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRATION,
        });

        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRATION,
          httpOnly: true,
          httpOnly: true,
          signed: true,
        });
        res.status(200).json({
          data: {
            user: userInfo,
          },
          message: "Signin successfully!",
        });
      }
    } else {
      res.status(402).json({
        errors: {
          common: {
            msg: "Authentication failed",
          },
        },
      });
    }
  } catch (error) {
    res.status(402).json({
      errors: {
        common: {
          msg: "Authentication failed",
        },
      },
    });
  }
};

const getLoggedinUser = async (req, res, next) => {
  const cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
  if (cookies) {
    try {
      const token = cookies[process.env.COOKIE_NAME];
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({
        data: {
          user: decodedUser,
        },
        message: "Logged in",
      });
    } catch (error) {
      res.status(402).json({
        errors: {
          common: {
            msg: "Authentication failed",
          },
        },
      });
    }
  }
};

module.exports = { signUp, login, getLoggedinUser };
