const express = require('express');
const app = express();

module.exports = app => {
  app.get('/api/polls', (req, res) => {
    return 'pollssss';
  });

  app.get('/api/polls/:id', (req, res) => {
    return "thisss poll"
  });

  app.get('api/polls/new', (req, res) => {
    return "YEAH THIS IS A NEW POLL"
  });
}
