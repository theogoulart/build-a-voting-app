const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Poll = mongoose.model('polls');

module.exports = (app) => {
  app.get('/api/polls', (req, res) => {
    Poll.find({})
      .then(polls => polls)
      .then(polls => res.json({ data: polls }))
      .catch(err => err);
  });

  app.post('/api/polls', requireLogin, (req, res) => {
    const { title, options } = req.body;
    new Poll({ title, options, _user: req.user }).save();
    res.redirect('/api/polls');
  });

  app.get('/api/polls/:id', (req) => {
    const { id } = req.params;
    Poll.find({ _id: id })
      .then(poll => poll)
      .catch(err => err);
  });

  app.delete('/api/polls/:id', (req, res) => {
    const { id } = req.params;
    Poll.find({ _id: id }).remove();
    res.redirect('/api/polls');
  });
};
