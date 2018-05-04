const express = require('express');
const router = express.Router();

// import routes
const messages = require('./message');
const users = require('./user');
const auth = require('./authenticate');

// assign routes
router.route('/messages')
      .post(messages.postMessage)
      .delete(messages.deleteMessage)
      .put(messages.updateMessage);
router.route('/messages/all').delete(messages.deleteAllMessage);
router.route('/users').post(users.postUser);

// routes below this need to authenticate token
router.use(auth.authenticate);
router.route('/messages').get(messages.getMessage);

module.exports = router;
