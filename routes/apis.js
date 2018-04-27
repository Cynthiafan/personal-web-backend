const express = require('express');
const router = express.Router();

// import routes
const messages = require('./message');

// assign routes
router.route('/messages').post(messages.postMessage);
router.route('/messages').get(messages.getMessage);
router.route('/messages').delete(messages.deleteMessage);
router.route('/messages').put(messages.updateMessage);

module.exports = router;
