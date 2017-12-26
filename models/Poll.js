const mongoose = require('mongoose');
const { Schema } = mongoose;

const pollSchema = new Schema({
  name: String,
  options: [{
    name: { type: String },
    count: { type: Number },
  }],
});

mongoose.model('users', userSchema);
