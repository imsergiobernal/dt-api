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
  try {
    const feeds = await getAllFeeds();
    return res.status(200).json(feeds);
  } catch (err) {
    return res.status(500);
  }
});

/**
 * @return {Array} The created feed
 */
router.post('/', async (req, res) => {
  const {
    title, body, image, source, publisher,
  } = req.body;
  try {
    const result = await createFeed({
      title, body, image, source, publisher,
    });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500);
  }
});

/**
 * @return {Object} Feed found by id
 */
router.get('/:feedId', async (req, res) => {
  const { feedId } = req.params;
  try {
    const feed = await getFeedByID(feedId);
    return res.status(200).json(feed);
  } catch (err) {
    return res.status(500);
  }
});

/**
 * @return {Object} Document updated if all was successful
 */
router.put('/:feedId', async (req, res) => {
  const { feedId } = req.params;
  const {
    title, body, image, source, publisher,
  } = req.body;
  try {
    const feed = await updateFeed(feedId, {
      title, body, image, source, publisher,
    });
    return res.status(200).json(feed);
  } catch (err) {
    return res.status(500);
  }
});

/**
 * @return {Object} Deleted feed document
 */
router.delete('/:feedId', async (req, res) => {
  const { feedId } = req.params;
  try {
    const feed = await deleteFeed(feedId);
    return res.status(200).json(feed);
  } catch (err) {
    return res.status(500);
  }
});

module.exports = router;
