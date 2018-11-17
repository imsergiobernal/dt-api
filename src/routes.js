const express = require('express');

const Feed = require('./Feed/FeedRoutes');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Please read the documentation');
  })
  .post((req, res) => {
    res.send('Please read the documentation');
  })
  .put((req, res) => {
    res.send('Please read the documentation');
  });

router.use('/feeds', Feed);

module.exports = router;
