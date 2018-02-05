const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Poll = mongoose.model('polls');

module.exports = (app) => {
  app.get('/api/polls', (req, res) => {
    Poll.find({})
      .then(polls => polls)
      .then(polls => res.json({ data: polls }))
      .catch(err => console.error('app find', err));
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
      .catch(err => console.error('app get', err));
  });

  app.delete('/api/polls/:id', (req, res) => {
    const { id } = req.params;
    Poll.findByIdAndRemove(id, {})
      .then(() => res.redirect('/api/polls'))
      .catch(err => console.error('app delete', err));
  });

  app.put('/api/polls/', requireLogin, (req, res) => {
    const { id, options } = req.body;
    Poll.findByIdAndUpdate(id, { options }, {})
      .then(() => res.redirect('/api/polls'))
      .catch(err => console.error('app put', err));
  });
};
