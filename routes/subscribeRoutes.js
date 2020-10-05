const express = require('express');
const subscribeController = require('../controllers/subscribeController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    subscribeController.getAllSubscribes
  )
  .post(subscribeController.createSubscribe);

// router
//   .route('/:id')
//   .delete(
//     authController.protect,
//     authController.restrictTo('admin'),
//     subscribeController.deleteContact
//   );

module.exports = router;
