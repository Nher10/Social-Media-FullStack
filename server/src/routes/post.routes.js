const { postsController } = require("../controllers/posts.controller");
const express = require("express");
const router = express.Router();

router.post("/", postsController.createPost);
router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPostById);
router.put("/:id", postsController.updatePostById);
router.delete("/:id", postsController.deletePostById);

module.exports = router;
