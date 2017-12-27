const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const app = express();

module.exports = app => {
  app.get('/api/polls', (req, res) => {
    return 'pollssss';
  });

  app.get('/api/polls/:id', (req, res) => {
    return "thisss poll"
  });

  app.post('api/polls', requireLogin, (req, res) => {
    res.send("BORA, HORA DO SHOW PORRA!");
  });
}
