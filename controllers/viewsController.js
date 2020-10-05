const Blog = require('../models/blogModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getHome = catchAsync(async (req, res, next) => {
  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .limit(3);
  res.status(200).render('home', {
    blogs
  });
});

exports.getShop = catchAsync(async (req, res, next) => {
  res.status(200).render('shop', {});
});

exports.contactForm = catchAsync(async (req, res, next) => {
  res.status(200).render('contact', {});
});

exports.getBlog = catchAsync(async (req, res, next) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.status(200).render('blog', { blogs });
});

exports.getOneBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id).populate({
    path: 'comments',
    fields: 'comment user'
  });

  if (!blog) {
    return next(new AppError('Invalid Post', 404));
  }

  res.status(200).render('blog-details', { blog });
});

exports.checkout = catchAsync(async (req, res, next) => {
  res.status(200).render('checkout', {});
});

exports.about = catchAsync(async (req, res, next) => {
  res.status(200).render('about', {});
});

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render('login-signup', {});
});

exports.me = catchAsync(async (req, res, next) => {
  res.status(200).render('accounts', {});
});

exports.blogArea = catchAsync(async (req, res, next) => {
  res.status(200).render('blogarea', {});
});

exports.AllBlogsAdmin = catchAsync(async (req, res, next) => {
  res.status(200).render('admin_all_blog', {});
});
