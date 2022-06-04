// Start coding here
const BlogPostModel = require("../models/blog-post");

// 1. If you received a query parameter `tag`, filter posts according to the received tag.
// 2. If you received a query parameter `author`, filter posts according to the received author name.
// 3. If you received both `tag` and `author` in the query parameters, then apply filters for both tag and author.
// 4. If no query parameters are received, return an error message with status code 400 asking the user to enter a valid query parameter with the appropriate status code.

const filterBlogPosts = async (req, res) => {
  const { tag, authorName } = req.query;
  // expecting 2 queries: tag , author
  // validate the queries

  if (!tag && !author) {
    res.status(400).json({ message: "please enter valid query params" });
  }

  //   const queryArr = Object.keys(req.query);
  /*
  {
      tag:afasf,
      author:dasfa,
  }

  [tag,author]
  */

  // Loop

  const query = {};

  if (tag) {
    query.tag = tag;
  }

  if (author) {
    query["author.name"] = author;
  }

  //
  try {
    const blogPosts = await BlogPostModel.find(query);
    res.json(blogPosts);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }

  //   BlogPostModel.find(query)
  //     .then((obj) => {
  //       res.json(blogPosts);
  //     })
  //     .catch((err) => {
  //       res.status(422).json({ message: err.message });
  //     });
  /*
  {
      "tag": <tag value>,
      "author.name": <author>
  }
  */
  // incase that tag and author is passed
  // filter the blogs using both or either one of them

  // find with aquery
};

module.exports = {
  filterBlogPosts,
};
