const mongoose = require('mongoose');
const validator = require('validator');

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: [validator.isEmail, 'Please provide a valid email'],
    unique: [true, 'Email already subscribed']
  },
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

module.exports = Subscribe;
