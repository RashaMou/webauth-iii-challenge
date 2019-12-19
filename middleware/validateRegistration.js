const Users = require("../users/users-model");

module.exports = (req, res, next) => {
  const { username, password, department } = req.body;
  if (!username || !password || !department) {
    res.status(400).json("Please provide a username, password, and department");
  } else {
    Users.findBy({ username })
      .first()
      .then(user => {
        console.log(user);
        if (user) {
          res
            .status(400)
            .json("That username already exists. Please try another");
        } else {
          next();
        }
      })
      .catch(error => {
        res.status(500).json("Error registering user");
      });
  }
};
