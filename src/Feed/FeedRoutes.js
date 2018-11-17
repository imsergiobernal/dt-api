const express = require('express');

const Feed = require('./FeedModel');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const feeds = await Feed.find();
    return res.status(200).json(feeds);
  })
  .post(async (req, res) => {
    const {
      title, body, image, source, publisher,
    } = req.body;

    const feed = new Feed({
      title, body, image, source, publisher,
    });
    const result = await feed.save();
    res.status(200).json(result);
  });

router.route('/:feedId')
  .get(async (req, res) => {
    const { feedId } = req.params;

    const feeds = await Feed.findById(feedId);
    return res.status(200).json(feeds);
  })
  .put(async (req, res) => {
    const { feedId } = req.body;
    const {
      title, body, image, source, publisher,
    } = req.body;

    const feeds = await Feed.findByIdAndUpdate(feedId, {
      title, body, image, source, publisher,
    });
    return res.status(200).json(feeds);
  })
  .delete(async (req, res) => {
    const { feedId } = req.params;
    const feed = await Feed.findByIdAndDelete(feedId);
    return res.status(200).json(feed);
  });

module.exports = router;
