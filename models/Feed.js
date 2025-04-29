const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    posts: Array
});

module.exports = mongoose.model('Feed', feedSchema);
