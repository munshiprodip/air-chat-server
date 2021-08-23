const User = require("../models/User");
const jwt = require("jsonwebtoken");
const path = require("path");
const { unlink } = require("fs");
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const { fileUploader } = require("../helper/fileUploader");

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
          throw createError("Email already registered");
        }
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 uppercase, 1 lowercase, 1 number & 1 symbol"
    ),
  check("gender").isLength({ min: 1 }).withMessage("Please select a gender"),
  check("photoUrl").custom((value, { req }) => {
    if (req.files.length === 0) {
      throw createError("Photo is missing");
    } else {
      return true;
    }
  }),
];

const validationResultHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length > 0) {
    if (req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(
        path.join(__dirname, `/../public/uploads/avaters/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }
    res.status(500).json({
      errors: mappedErrors,
    });
  } else {
    next();
  }
};

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

function avatarUpload(req, res, next) {
  const upload = fileUploader(
    "avaters",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed!"
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = {
  avatarUpload,
  checkUserExists,
  userDataValidator,
  validationResultHandler,
};
