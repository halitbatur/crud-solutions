// Start coding here
const BlogPostModel = require("../models/blog-post");

const getAllAuthors = async (_, res) => {
  try {
    const blogPosts = await BlogPostModel.find();
    const authors = {};

    blogPosts.forEach((blogPost) => {
      if (!authors[blogPost.author.name]) {
        authors[blogPost.author.name] = blogPost.author;
      }
    });

    res.json(Object.values(authors));

    /*
        {
            "Cengiz" : {
                name:"Cengiz",
                age:"23"
            }
        }
    */
    /*
    [
        { bloginfo:
            
            author:{
                
            }
        },
        {
            author:{

            }
        },
        {
            author:{

            }
        },
        {
            author:{

            }
        },

    ]
    */
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
  // find all the blogposts
  // extract the authors
  // make sure that authors are not duplicated
};

// A PUT request to `/api/authors/AUTHOR_NAME` with the author details to be
//  changed in the request body should update the relevant fields on all blog posts of that author.

const updateAuthor = (req, res) => {
  const authorName = req.params.name;

  /*
    {
        age:28,
        areaOfExperties: [ "deisgn","uiux"]
    }

  */

      /*
    {
        "author.age": 28,
        "author.areaOfExperties": [ "deisgn","uiux"]
    }

    */

    const updateSet = {};

    Object.keys(req.body).forEach(key => {
        //
        updateSet[`author.${key}`] = req.body[key];
    })



    try{
        const updateAuthors = await BlogPostModel.updateMany({
            "author.name":authorName
        },updateSet
      );
    }catch(err){
        res.status(422).json({message:err.message})
    }

  




};
