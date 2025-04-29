const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: String,
    source: String,
    savedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Post', postSchema);
