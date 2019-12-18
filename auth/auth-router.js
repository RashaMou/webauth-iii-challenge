const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");

// router.post('/register')

// router.post("/login", async (res, req) => {
//   let { username, password } = req.body;
// });

module.exports = router;
