const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, ' Blog should have a title'],
      trim: true,
      unique: true
    },
    // slug: String,
    blog: {
      type: String,
      required: [true, 'The Blog content should not be empty'],
      trim: true
    },
    author: {
      type: String,
      required: [true, ' Blog should have an author']
    },
    photo: {
      type: String,
      default: 'default.jpg'
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual populate
blogSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'blog',
  localField: '_id'
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
