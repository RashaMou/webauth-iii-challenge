const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", async (req, res) => {
  const users = Users.find();
  try {
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(4040).json("No users found");
    }
  } catch (error) {
    res.status(500).json("Error retrieving users");
  }
});
