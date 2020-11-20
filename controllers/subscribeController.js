const Subscribe = require('../models/subscribeModel');
const factory = require('./handlerFactory');

exports.getAllSubscribes = factory.getAll(Subscribe);
exports.createSubscribe = factory.createOne(Subscribe);
exports.deleteSubscribe = factory.deleteOne(Subscribe);
