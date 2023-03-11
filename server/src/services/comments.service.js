const { comments } = require("../../models/");

class commentsService {
    // create new comments
    static async createComment ({ desc, userId, postId }) {
        try {
            const commentCreated = await comments.create({desc, userId, postId})
            return commentCreated;
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // get all comments
    static async getAllComments () {
        try {
            return comments.findAll()
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // get Comment By ID
    static async getCommentById (id) {
        try {
            return comments.findOne({ where: { id } })
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // update commentbyid
    static async updateCommentById(id, { desc }) {
        try {
            const comment = await comments.update(
                { desc },
                { where: { id } });
            return comment;
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // delete comment
    static async deleteCommentById (id) {
        try {
            const comment = await comments.destroy({ where: { id } })
            return comment;
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
}

module.exports = { commentsService }