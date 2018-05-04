var express = require('express');
var app = express();

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

app.set('secret', config.secret);

module.exports = {
  postUser: (req, res, next) => {
    User.findOne({user_id: req.body.userId}, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.json({ success: false, message: 'Authenticate failed. User not found'})
      } else {
        if (user.user_id != req.body.userId) {
          res.json({ success: true, message: 'Authenticate failed. Wrong password'})
        } else {
          const token = jwt.sign(JSON.parse(JSON.stringify(user)), app.get('secret'), {expiresIn: 60 * 60 * 24})
          res.json({
            success: true,
            message: 'Enjoy your token',
            token: token
          })
        }
      }
    })
  }
}
