const Feed = require('../FeedModel');

/**
 * @function
 * @param {number} id Feed identification ID in database
 * @return {Array} List of feeds
 */
module.exports = async (id) => {
  const feed = await Feed.findById(id);
  return feed;
};
