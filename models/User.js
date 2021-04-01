const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
    },
    email : {
        type : String,
    },
    country: {
        type: Number,
    }
}, {
    collection: 'user'
});

const User = mongoose.model('User', UserSchema);

exports.User = User;