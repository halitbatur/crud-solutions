const db = require("./db/connection");
const express = require("express");
const bodyParser = require("body-parser");

const blogPostsController = require("./controllers/blog-post");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(postsController);

const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
