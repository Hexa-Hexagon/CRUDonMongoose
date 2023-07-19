const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, min: 1, max: 64 },
    userEmail: { type: String, required: true, min: 1, max: 64 },
    userPassword: { type: String, required: true, min: 4, max: 18 }

});

module.exports = mongoose.model('users', userSchema);