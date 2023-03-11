const { commentsService } = require("../services/comments.service");

class commentsController {
  // create comment
  static async createComment(req, res) {
    try {
      const {
        desc,
        userId,
        postId
      } = req.body;
      const comment = await commentsService.createComment({
        desc,
        userId,
        postId
      });
      res.json(comment);
    } catch (err) {
      console.log(err);
    }
  }
  // get all comments
  static async getAllComments(_req, res) {
    try {
      const comments = await commentsService.getAllComments();
      res.json(comments);
    } catch (err) {
      res.status(404).json({ message: "Comments not found" });
    }
  }
  // get comment by id
  static async getCommentById(req, res) {
    try {
      const { id } = req.params;
      const comment = await commentsService.getCommentById(id);
      res.json(comment);
    } catch (err) {
      res.status(404).json({ message: "Comment not found" });
    }
  }
  // update comment by id
  static async updateCommentById(req, res) {
    try {
      const { id } = req.params;
      const {
        desc,
      } = req.body;
      const comment = await commentsService.updateCommentById(id, {
        desc,
      });
      res.json(comment);
    } catch (err) {
      res.status(404).json({ message: "Comment not found" });
    }
  }
  // delete comment by id
  static async deleteCommentById(req, res) {
    try {
      const { id } = req.params;
      const comments = await commentsService.deleteCommentById(id);
      res.json(comments);
    } catch (err) {
      res.status(404).json({ message: "Comment not found" });
    }
  }
}

module.exports = { commentsController };