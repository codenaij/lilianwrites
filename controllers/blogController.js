const multer = require('multer');
const sharp = require('sharp');
const Blog = require('../models/blogModel');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllBlogs = factory.getAll(Blog);
exports.getBlog = factory.getOne(Blog, { path: 'comments' });
exports.createBlog = factory.createOne(Blog);
exports.updateBlog = factory.updateOne(Blog);
exports.deleteBlog = factory.deleteOne(Blog);

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadBlogPhoto = upload.single('photo');

exports.resizeBlogPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.body.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/images/blog_photos/${req.body.filename}`);

  next();
});
