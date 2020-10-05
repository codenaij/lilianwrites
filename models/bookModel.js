const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book must have a title'],
    unique: true,
  },
  author: {
    type: String,
    required: [true, 'Book must have an author'],
  },
  cover_image: {
    type: String,
  },
  year_of_publication: {
    type: Number,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
