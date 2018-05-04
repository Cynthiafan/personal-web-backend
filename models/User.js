const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: String,
    email: String,
    admin: Boolean
});

module.exports = mongoose.model('User', UserSchema);
