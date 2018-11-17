const express = require('express');

// const Feed = require('./Feed/FeedRoutes');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Main endpoint');
  })
  .post((req, res) => {
    res.send('This is not a valid request in main endpoint');
  })
  .put((req, res) => {
    res.send('This is not a valid request in main endpoint');
  });

router.route('/feeds')
  .get((req, res) => {
    res.send('Get all feeds');
  })
  .post((req, res) => {
    res.send('Add a feed');
  })
  .put((req, res) => {
    res.send('Update a feed');
  });

module.exports = router;
