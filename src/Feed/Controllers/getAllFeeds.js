const Feed = require('../FeedModel');

/**
 * @function
 * @return {Array} List of feeds
 */
module.exports = async () => {
  const feeds = await Feed.find();
  return feeds;
};
