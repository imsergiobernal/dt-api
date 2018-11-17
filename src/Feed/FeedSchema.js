const { Schema } = require('mongoose');

const FeedSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  source: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

module.exports = FeedSchema;
