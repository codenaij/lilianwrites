const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, 'Comment can not be empty!'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    blog: {
      type: mongoose.Schema.ObjectId,
      ref: 'Blog',
      required: [true, 'Comment must belong to a blog.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.index({ blog: 1, user: 1 }, { unique: true });

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
