const Post = require("../schemas/postSchemas");

const createPost = async (req, res) => {
  //   const newPost = new Post(req.body);
  //   newPost.save((error) => {
  //     if (error) {
  //       res.status(500).json({
  //         error: "there was a server side error",
  //       });
  //     } else {
  //       res.status(200).json({
  //         message: "Post was inserted successfully",
  //       });
  //     }
  //   });
  const response = await Post.create(req.body);
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
//   console.log(response);
//   res.send(response);
};

const updatePost = async (req, res) => {
  const response = await Post.updateMany(
    {},
    {
      $set: { title: "john duo" },
    }
  );
  console.log(response);
  res.send(response);
};

const deletePost = async (req, res) => {
  const _id = req.params.id;
  const response = await Post.deleteOne({ _id: _id });
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

module.exports.postController = {
  createPost,
  updatePost,
  deletePost,
};
