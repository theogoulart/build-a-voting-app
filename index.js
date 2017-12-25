const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./routes/authRoutes')(app);
require('./services/passport');
require('./models/User');

mongoose.connect(require('./config/keys').mongoURI);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

module.exports = app;
