const Feed = require('../FeedModel');

/**
 * Create a new Feed
 * @function
 * @param {Object} feed
 * @param {string} feed.title The feed's title
 * @param {string} feed.body The main content of the feed
 * @param {string} feed.image Image URL from the feed
 * @param {string} feed.source The whole URL address source
 * @param {string} feed.publisher The domain name of the publisher
 * @return {Object} Returns the same feed if has been created
 */
module.exports = async ({
  title, body, image, source, publisher,
}) => {
  const feed = new Feed({
    title, body, image, source, publisher,
  });
  return feed.save();
};
