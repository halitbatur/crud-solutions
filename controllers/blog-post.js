const router = require("express").Router();
const BlogPostModel = require("../models/blog-post");

router.get("/blogposts", async (_, res) => {
  const posts = await BlogPostModel.find();
  res.json(posts);
});

router.get("/blogposts/filter", async (req, res) => {
  const { tag, author } = req.query;

  const query = {};
  if (tag) query.tags = tag;
  if (author) query["author.name"] = author;

  if (!query.tags && !query["author.name"]) {
    res
      .status(400)
      .json({ message: "make sure you send a valid query parameter" });
  }

  const posts = await BlogPostModel.find(query);
  res.json(posts);
});

router.get("/blogposts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await BlogPostModel.findById(id);
    if (!post)
      res.json({ message: "the post you are looking for wasn't found" });
    res.json(post);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/blogposts", async (req, res) => {
  const postData = req.body;
  try {
    const newPost = await BlogPostModel.create(postData);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
});

module.exports = router;
