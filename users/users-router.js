const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", async (req, res) => {
  const allUsers = await Users.find();
  try {
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(4040).json("No users found");
    }
  } catch (error) {
    res.status(500).json("Error retrieving users");
  }
});

module.exports = router;
