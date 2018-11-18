const express = require('express');

const { getHeadlines } = require('../HeadlinesServices');

const router = express.Router();

/**
 * @method GET
 * @todo Needs implementation with ElMundo
 * @return {Array} List of ElPais headlines
 */
module.exports = router.get('/', async (req, res) => {
  try {
    const headlines = await getHeadlines();
    return res.status(200).json(headlines);
  } catch (err) {
    res.status(500).json(err);
  }
});
