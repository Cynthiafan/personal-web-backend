const Message = require('../models/Message');

module.exports = {
  postMessage: (req, res, next) => {
    const message = new Message({
      time: req.body.params.time,
      name: req.body.params.name,
      email: req.body.params.email,
      message: req.body.params.message,
      status: false
    });
    message.save()
    .then(item => {
        res.send("item saved to database");
      })
    .catch(err => {
        res.send(error);
    });
  },
  getMessage: (req, res, next) => {
    Message.find().exec((err, messages) => {
      res.json(messages.reverse());
    });
  },
  deleteMessage: (req, res, next) => {
    Message.find(req.query).remove().exec()
    res.send('message has been deleted.');
  },
  updateMessage: (req, res, next) => {
    const updatedStatus = { status: !req.body.params.status }
    Message.find({_id: req.body.params._id}).update(updatedStatus).exec();
    res.send('status updated.');
  },
  deleteAllMessage: (req, res, next) => {
    Message.find().remove().exec()
    res.send('message has been deleted.');
  },
}
