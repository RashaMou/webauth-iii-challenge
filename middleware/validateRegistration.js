const Users = require("../users/users-model");

module.exports = (req, res, next) => {
  const { username, password, department } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (!username || !password || !department) {
        res
          .status(400)
          .json("Please provide a username, password, and department");
      } else if (user.username !== username) {
        next();
      } else {
        res
          .status(400)
          .json("That username already exists. Please try another");
      }
    })
    .catch(error => {
      res.status(500).json("Error registering user");
    });
};
