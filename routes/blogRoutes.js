const express = require('express');
const blogController = require('../controllers/blogController');
const authController = require('../controllers/authController');
const commentRouter = require('./commentRoutes');

const router = express.Router();

router.use('/:blogId/reviews', commentRouter);

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'contributor'),
    blogController.uploadBlogPhoto,
    blogController.resizeBlogPhoto,
    blogController.createBlog
  );

router
  .route('/:id')
  .get(blogController.getBlog)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'contributor'),
    blogController.updateBlog
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    blogController.deleteBlog
  );

module.exports = router;
