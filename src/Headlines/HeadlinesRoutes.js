const express = require('express');

const { getHeadlines } = require('./HeadlinesServices');

const router = express.Router();

/**
 * @todo Needs implementation with ElMundo
 * @return {Array} List of ElPais headlines
 */
router.get('/', async (req, res) => {
  try {
    const headlines = await getHeadlines();
    return res.status(200).json(headlines);
  } catch (err) {
    return res.status(500);
  }
});

module.exports = router;
