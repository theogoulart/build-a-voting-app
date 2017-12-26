const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => done(null, user));
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true, 
  }, (acessToken, refreshToken, profile, done)  => {
    User.findOne({ 'googleID': profile.id })
    .then(existingUser => {
      return existingUser ?
      done(null, existingUser)
      :
      new User({
        googleID: profile.id,
        name: profile.name.givenName,
      })
      .save()
      .then(user => done(null, user));
    })
  })
);

module.exports = passport;
