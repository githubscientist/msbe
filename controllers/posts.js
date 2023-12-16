const Post = require('../models/post');

const postController = {
    createPost: (request, response) => {
        try {
            // get the userid from the request
            const userId = request.userId;

            const {title, description} = request.body;

            // create a post
            const post = new Post({
                title,
                description,
                user: userId,
            });

            // save the post
            post.save();

            // return the post
            return response.json({ message: 'Post created successfully', post });
        } catch (error) {
            return response.json({ error: 'Token is invalid' });
        }
    },
}

module.exports = postController;