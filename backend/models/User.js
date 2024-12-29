// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    // Add other fields as needed (e.g., phone, food_preference)
});

const User = mongoose.model('User', userSchema);

module.exports = User;