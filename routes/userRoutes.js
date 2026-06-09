const express = require("express");
const router = express.Router();

const {
  createUserWithPosts,
  getUserWithPosts,
} = require("../controllers/userController");

router.post("/users", createUserWithPosts);

router.get("/users/:id", getUserWithPosts);

module.exports = router;