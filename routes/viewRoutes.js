const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.getHome);
router.get('/shop', authController.isLoggedIn, viewsController.getShop);
router.get('/contact', authController.isLoggedIn, viewsController.contactForm);
router.get('/blog', authController.isLoggedIn, viewsController.getBlog);
router.get('/blog/:id', authController.isLoggedIn, viewsController.getOneBlog);
router.get('/checkout', authController.isLoggedIn, viewsController.checkout);
router.get('/about', authController.isLoggedIn, viewsController.about);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/blog-area', authController.protect, viewsController.blogArea);
router.get('/blog-area-all', authController.isLoggedIn, viewsController.AllBlogsAdmin);
router.get('/me', authController.protect, viewsController.me);

module.exports = router;
