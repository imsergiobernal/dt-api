const mongoose = require('mongoose');
const FeedSchema = require('./FeedSchema');

const FeedModel = mongoose.model('feed', FeedSchema);

module.exports = FeedModel;
