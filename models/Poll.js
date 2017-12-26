const mongoose = require('mongoose');
const { Schema } = mongoose;

const pollSchema = new Schema({
  title: String,
  options: [{
    option: { type: String },
    count: { type: Number, default: 0 },
  }],
});

mongoose.model('polls', userSchema);
