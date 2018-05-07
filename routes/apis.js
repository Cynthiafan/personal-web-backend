const express = require('express');
const router = express.Router();

// import routes
const messages = require('./message');
const users = require('./user');
const auth = require('./authenticate');

// assign routes
router.route('/messages')
      .put(messages.updateMessage)
      .post(messages.postMessage);

router.route('/users').post(users.postUser);

// routes below this need to authenticate token
router.use(auth.authenticate);

router.route('/messages')
      .get(messages.getMessage)
      .delete(messages.deleteMessage);

router.route('/messages/all').delete(messages.deleteAllMessage);

module.exports = router;
