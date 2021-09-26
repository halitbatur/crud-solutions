# Create and Read Data with Mongoose Lab

## Objectives

- Practice getting data from MongoDB using Mongoose
- Practice inserting data to the database

## Overview

Previously, we set up Mongoose and created our blog model schema, now it is time to interact with our database and manipulate the data.

## Instructions

#### Part 0: Getting all posts

When you call the endpoint `/posts` return all the posts as JSON.

#### Part 1: Inserting data

Insert a new post with the title "Writing my first blog" and "Node.js" as one of the tags to your blog database using a POST request and it should return the post if data is inserted successfully and an error if not with the appropriate status code for both cases.

<img src="./assets/postman.png" alt="postman" width="550"/>

#### Part 2: Getting a post using post id

Return a single post using the post **id** as a JSON object when calling the endpoint `/posts/POST_ID`, if the post wasn't found, return the error message with the appropriate status code.

#### Part 3: Filtering posts by tag name

Return all posts that include a certain tag, your endpoint should be `/posts/:tag` and it should return a list of posts.
