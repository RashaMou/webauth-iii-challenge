const Users = require("../users/users-model");

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (!username || !password) {
        res.status(400).json("Please enter a username and password");
      } else {
        next();
      }
    })
    .catch(error => {
      res.status(500).json("Error logging in");
    });
};
