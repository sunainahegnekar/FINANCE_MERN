const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    month: { type: String, required: true }, // e.g., "2025-03"
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Budget', budgetSchema);