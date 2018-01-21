const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();

require('./models/User');
require('./models/Poll');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/pollRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

module.exports = app;
