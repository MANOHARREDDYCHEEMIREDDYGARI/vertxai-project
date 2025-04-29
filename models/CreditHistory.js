const mongoose = require('mongoose');

const creditHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    points: Number,
    reason: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CreditHistory', creditHistorySchema);
