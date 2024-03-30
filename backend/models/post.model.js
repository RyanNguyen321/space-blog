const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: String, required: true},
    title: {type: String, required: true},
    tags: {type: [String], required: false}
    }, {
    timestamps: true,
    });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;