const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide your first name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide your last name'],
    trim: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  phone: {
    type: Number,
    required: [true, 'Please provide your phone Number'],
  },
  message: {
    type: String,
    required: [true, 'Message should not be empty'],
    trim: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
