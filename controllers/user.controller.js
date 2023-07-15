const User = require("../schemas//userSchemas");

const createUser = async (req, res) => {
  const response = await User.create(req.body);
  console.log(response);
  res.send(response);
};

const updateUser = async (req, res) => {
  const response = await User.updateMany(
    {},
    {
      $set: { name: "john duo" },
    }
  );
  console.log(response);
  res.send(response);
};
const deleteUser = async (req, res) => {
  const _id = req.params.id;
  const response = await User.deleteOne({ _id: _id });
  console.log(response);
  res.send(response);
};

module.exports.userController = {
  createUser,
  updateUser,
  deleteUser,
};
