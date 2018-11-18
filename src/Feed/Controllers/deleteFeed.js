const Feed = require('../FeedModel');

/**
 * Delete an existing feed
 * @function
 * @param {Number} id Feed's document id
 * @return {Object} Returns the deleted feed document
 */
module.exports = async (id) => {
  const feed = await Feed.findByIdAndDelete(id);
  return feed;
};
