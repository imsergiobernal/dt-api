const express = require('express');

const getAllFeeds = require('./Controllers/getAllFeeds');
const createFeed = require('./Controllers/createFeed');
const getFeedByID = require('./Controllers/getFeedByID');
const updateFeed = require('./Controllers/updateFeed');
const deleteFeed = require('./Controllers/deleteFeed');

const router = express.Router();

/**
 * @return {Array} List of feeds
 */
router.get('/', async (req, res) => {
  const feeds = await getAllFeeds();
  return res.status(200).json(feeds);
});

/**
 * @return {Array} The created feed
 */
router.post('/', async (req, res) => {
  const {
    title, body, image, source, publisher,
  } = req.body;

  const result = await createFeed({
    title, body, image, source, publisher,
  });

  return res.status(200).json(result);
});

/**
 * @return {Object} Feed found by id
 */
router.get('/:feedId', async (req, res) => {
  const { feedId } = req.params;

  const feed = await getFeedByID(feedId);
  return res.status(200).json(feed);
});

/**
 * @return {Object} Document updated if all was successful
 */
router.put('/:feedId', async (req, res) => {
  const { feedId } = req.params;
  const {
    title, body, image, source, publisher,
  } = req.body;

  const feed = await updateFeed(feedId, {
    title, body, image, source, publisher,
  });

  return res.status(200).json(feed);
});

/**
 * @return {Object} Deleted feed document
 */
router.delete('/:feedId', async (req, res) => {
  const { feedId } = req.params;
  const feed = await deleteFeed(feedId);
  return res.status(200).json(feed);
});

module.exports = router;
