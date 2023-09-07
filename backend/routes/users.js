const router = require('express').Router();
let User = require('../models/user.model');

//Route, first endpoint that handles http get requests, if you path to sitename.com/user/ this happens
router.route('/').get((req,res) => {
    // Get users via mongoose from mongoDB, return users in Json format
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Post request,
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;