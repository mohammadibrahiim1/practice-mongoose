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
  if (response) {
    res.status(200).send({
      success: true,
      message: "deleted product successfully",
      data: response,
    });
  } else {
    res.status(404).send({
      success: false,
      message: "product not found",
    });
  }
};

module.exports.userController = {
  createUser,
  updateUser,
  deleteUser,
};
