const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['User', 'Admin'], default: 'User' },
    credits: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
