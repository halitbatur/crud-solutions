const router = require('express').Router();
const PostModel = require('../models/blog-post');

router.get("/posts", async (_, res) => {
    const posts = await PostModel.find();
    res.json(posts)
})

router.get("/posts/search", async (req, res) => {
    const title = req.query.q;
    console.log(req.query.q);
    PostModel.findOne({ title }, (err, doc) => {
        if (err) return res.status(422).json({ message: err.message })
        return res.json(doc);
    });
})

router.get("/posts/:id", async (req, res) => {
    const { id } = req.params;
    PostModel.findOne({ id }, (err, post) => {
        if (err) return res.status(422).json({ message: err.message })
        return res.json(post);
    });
})

router.post("/posts", (req, res) => {
    const postData = req.body;
    PostModel.create(postData, (err) => {
        if (err) return res.status(422).json({ message: err.message })
        return res.status(201).json({ ...postData });
    })
})

module.exports = router;