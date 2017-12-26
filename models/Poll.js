const mongoose = require('mongoose');
const { Schema } = mongoose;

const pollSchema = new Schema({
  title: String,
  options: [{
    option: { type: String },
    count: { type: Number },
  }],
});

mongoose.model('polls', userSchema);
