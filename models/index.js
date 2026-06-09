const sequelize = require("../config/database");

const User = require("./User");
const Post = require("./Post");

// One-to-Many Association

User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  sequelize,
  User,
  Post,
};