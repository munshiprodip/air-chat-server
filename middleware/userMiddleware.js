const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");

const userDataValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must only alphabet")
    .trim(),

  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          // throw new Error("Email already registered");
          throw createError("Email already registered");
        }
      } catch (error) {
        // throw new Error(error.message);
        throw createError(error.message);
      }
    }),

  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 uppercase, 1 lowercase, 1 number & 1 symbol"
    ),
];

const validationResultHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length > 0) {
    res.status(500).json({
      errors: mappedErrors,
    });
  } else {
    next();
  }
};

async function validateUser(req, res, next) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user && user._id) {
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
          user: user,
        },
        token: token,
        message: "User allready registered!",
      });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: err.message,
          // msg: "Unknown error occured!",
        },
      },
    });
  }
}

async function checkUserExists(req, res, next) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user && user._id) {
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
          user: user,
        },
        token: token,
        message: "User allready registered!",
      });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: err.message,
          // msg: "Unknown error occured!",
        },
      },
    });
  }
}

module.exports = {
  checkUserExists,
  userDataValidator,
  validationResultHandler,
};
