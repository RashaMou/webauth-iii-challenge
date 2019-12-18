const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const Users = require("../users/users-model");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, secret.jwtSecret, function(err, decodedToken) {
      if (err) {
        res.status(401).json("Invalid token");
      } else {
        req.token = decodedToken;
      }
      next();
    });
  } else {
    res.status(400).json("Please login and try again");
  }
};
