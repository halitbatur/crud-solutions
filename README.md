## Create and read data with mongoose Lab

### Objectives

- Practice getting data from mongoDB using mongoose
- Practice inserting data to the database

### Overview

Previously, we set up mongoose and created our blog model schema, now it is time to interact with our database and manipulate the data.

### Instructions

- When you call the endpoint `/posts` return all the posts as JSON.
- Insert a new post with the title "Doing post request with mongoose" to your blog database using a POST request and it should return the post if data is inserted successfully and an error if not with the appropriate status code for both cases.
- Return a single post using the post **id** as a JSON object when calling the endpoint `posts/POST_ID`, if the post wasn't found return the error message with the appropriate status code.
- Create a search endpoint adding the search keyword as a query in a GET request, you should have an endpoint `/posts/search?q=KEYWORD` and, it should return a single post corresponding to the keyword, or an error message if the post wasn't found.
