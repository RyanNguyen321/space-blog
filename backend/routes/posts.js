const router = require('express').Router();
let Post = require('../models/post.model');

//Route, first endpoint that handles http get requests, if you path to sitename.com/user/ this happens
router.route('/').get((req,res) => {
    // Get users via mongoose from mongoDB, return users in Json format
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Post request
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const content = req.body.content;
    const date = Date.parse(req.body.date);
    const color = req.body.color;
    const tags = req.body.tags;

    const newPost = new Post({
        username,
        content,
        date,
        color,
        tags
    });

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/id').get((req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.username = req.body.username;
            post.content = req.body.content;
            post.date = Date.parse(req.body.date);
            post.color = req.body.color;
            post.tags = req.body.tags;

            post.save()
                .then(() => res.json('Post updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req,res) => {

})

module.exports = router;