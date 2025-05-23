import SocialDAO from "../dao/socialDAO.js";

export default class SocialController {
    static async apiCreatePost(req, res, next) {
        try {
            const { userName, image, description } = req.body;
            const createResult = await SocialDAO.createPost({ userName, image, description });
            res.json(createResult);
        } catch (e) {
            console.error("apiCreate Post error.");
            res.status(500).json({ error: "EEEE" });
        }
    }

    static async apiGetAllPosts(req, res, next) {
        try{
            const posts = await SocialDAO.getFeed();
            res.json(posts);
        } catch(e) {
            console.error("apiGetAllPosts error.");
            res.status(500).json({ error: "EEEE" });
        }
    }

    static async apiAddComments(req, res, next) {
        try {
            const { postId, userName, commentText } = req.body;
            const addComment = await SocialDAO.addComment(postId, {
                userName,
                commentText,
            });
            res.json(addComment);
        } catch (e) {
            console.error("apiAddComments");
            res.status(500).json({ error: e.message });
        }
    }

    static async apiAddLike(req, res) {
        try {
            const { postId } = req.body;
            const update = await SocialDAO.incrementLikes(postId);
            res.json(update);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}