const User = require("../schemas//userSchemas");

const createUser = async (req, res) => {
  const response = await User.create(req.body);
  console.log(response);
  res.send(response);
};

module.exports.userController = {
  createUser,
};
