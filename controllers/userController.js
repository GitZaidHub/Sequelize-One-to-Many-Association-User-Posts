const { User, Post } = require("../models");

exports.createUserWithPosts = async (req, res) => {
  try {
    const { name, email, posts } = req.body;

    const user = await User.create(
      {
        name,
        email,
        Posts: posts,
      },
      {
        include: [Post],
      }
    );

    res.status(201).json({
      message: "User and posts created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
exports.getUserWithPosts = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: Post,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};