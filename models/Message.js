const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    time: String,
    name: String,
    email: String,
    message: String,
    status: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);
