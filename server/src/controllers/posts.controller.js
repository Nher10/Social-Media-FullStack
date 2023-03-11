const { postsService } = require("../services/posts.service");

class postsController {
  // create post
  static async createPost(req, res) {
    try {
      const {
        desc,
        img,
        userId
      } = req.body;
      const post = await postsService.createPost({
        desc,
        img,
        userId
      });
      res.json(post);
    } catch (err) {
      console.log(err);
    }
  }
  // get all post
  static async getAllPosts(_req, res) {
    try {
      const posts = await postsService.getAllPosts();
      res.json(posts);
    } catch (err) {
      res.status(404).json({ message: "Posts not found" });
    }
  }
  // get post by id
  static async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await postsService.getPostById(id);
      res.json(post);
    } catch (err) {
      res.status(404).json({ message: "Post not found" });
    }
  }
  // update post by id
  static async updatePostById(req, res) {
    try {
      const { id } = req.params;
      const {
        desc,
        img
      } = req.body;
      const posts = await postsService.updatePostById(id, {
        desc,
        img
      });
      res.json(posts);
    } catch (err) {
      res.status(404).json({ message: "Post not found" });
    }
  }
  // delete post by id
  static async deletePostById(req, res) {
    try {
      const { id } = req.params;
      const posts = await postsService.deletePostById(id);
      res.json(posts);
    } catch (err) {
      res.status(404).json({ message: "Post not found" });
    }
  }
}

module.exports = { postsController };