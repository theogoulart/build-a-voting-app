const express = require('express');
const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Poll = mongoose.model('polls');

const app = express();

module.exports = app => {
  app.get('/api/polls', (req, res) => {
    res.send('pollssss');
  });

  app.get('/api/polls/:id', (req, res) => {
    res.send('pollssss');
  });

  app.post('/api/polls', requireLogin, (req, res) => {
    const { title, options } = req.body;
    new Poll({ title, options, _user: req.user }).save();
    res.redirect('/api/polls');
  });
}
