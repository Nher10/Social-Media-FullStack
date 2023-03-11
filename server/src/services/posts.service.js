const { posts } = require("../../models/");

class postsService {
    // create new posts
    static async createPost ({ desc, img, userId }) {
        try {
            const postCreated = await posts.create({desc, img, userId})
            return postCreated;
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // get all posts
    static async getAllPosts () {
        try {
            return posts.findAll({ include: "comments" })
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // get Post By ID
    static async getPostById (id) {
        try {
            return posts.findOne({ where: { id }, include: "comments" })
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // update postbyid
    static async updatePostById(id, { desc, img }) {
        try {
            const post = await posts.update(
                { desc, img },
                { where: { id } });
            return post;
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
    // delete post
    static async deletePostById (id) {
        try {
            const post = await posts.destroy({ where: { id } })
            return post;
        } catch (err) {
            console.log(err)
            throw new Error();
        }
    }
}

module.exports = { postsService }