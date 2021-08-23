const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const checkLogin = async (req, res, next) => {
  const cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
  if (cookies) {
    try {
      const token = cookies[process.env.COOKIE_NAME];
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedUser;
      next();
    } catch (error) {
      res.status(402).json({
        errors: {
          common: {
            msg: "Authentication failed",
          },
        },
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
};

const loginDataValidator = [
  check("email")
    .isLength({ min: 1 })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address")
    .trim(),

  check("password")
    .isLength({ min: 1 })
    .withMessage("Password is required")
    .trim(),
];

const loginDataValidatorResultHandler = (req, res, next) => {
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

module.exports = {
  checkLogin,
  loginDataValidator,
  loginDataValidatorResultHandler,
};
