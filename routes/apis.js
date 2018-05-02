const express = require('express');
const router = express.Router();

// import routes
const messages = require('./message');
const users = require('./user');

// assign routes
router.route('/messages').post(messages.postMessage);
router.route('/messages').get(messages.getMessage);
router.route('/messages').delete(messages.deleteMessage);
router.route('/messages').put(messages.updateMessage);
router.route('/messages/all').delete(messages.deleteAllMessage);
router.route('/user').post(users.postUser);

module.exports = router;
