const Feed = require('../FeedModel');

/**
 * Update an existing Feed
 * @function
 * @param {Number} id Feed's document id
 * @param {Object} feed
 * @param {string} feed.title The feed's title
 * @param {string} feed.body The main content of the feed
 * @param {string} feed.image Image URL from the feed
 * @param {string} feed.source The whole URL address source
 * @param {string} feed.publisher The domain name of the publisher
 * @return {Object} Returns the previus feed's document state
 */
module.exports = async (id, {
  title, body, image, source, publisher,
}) => {
  const feed = Feed.findByIdAndUpdate(id, {
    title, body, image, source, publisher,
  });
  return feed;
};
