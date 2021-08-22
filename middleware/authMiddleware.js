const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  }
};

module.exports = { checkLogin };
