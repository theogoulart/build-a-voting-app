const express = require('express');
const app = express();
const passport = require('passport');

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
  }));
  
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => req.logout());

  app.get('/api/current_user', (req, res) => {
    res.send(`Current user is ${req.user}`);
  });
}

// f8dO8FO34BM1