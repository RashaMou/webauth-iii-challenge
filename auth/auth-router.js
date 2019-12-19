const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
// const jwt = require("jsonwebtoken");
const signToken = require("../helpers/signToken");
const validateRegistration = require("../middleware/validateRegistration");

router.post("/register", validateRegistration, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json("NO NO");
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({
          token,
          message: `Hello ${user.username}!`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json("NOPE");
    });
});

module.exports = router;
