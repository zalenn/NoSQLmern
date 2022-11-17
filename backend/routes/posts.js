const router = require("express").Router();
let Post = require("../models/posts.model");

// Get all posts

router.route("/").get((req, res) => {
    Post.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(400).json("Error " + err));
  });

// Add new posts

router.route("/add").post((req, res) => {
    const text = req.body.text; 
    const photo = req.body.photo;
    const likes = req.body.likes;
    const comments = req.body.comments;
    const created = req.body.created;
    const username = req.body.username;

    const newPost = new Post ({
        text,
        photo,
        likes,
        comments,
        created,
        username
    });

    newPost.save()
      .then(() => res.json("Post added!"))
      .catch((err) => res.status(400).json("Error: " + err))

});


router.route("/:id").delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
      .then(() => res.json("Post deleted!"))
      .catch((err) => res.status(400).json("Error: " + err))
});


router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error " + err));
});


  module.exports = router;