const express = require('express');

const getHeadlines = require('./Routes/getHeadlines');

const router = express.Router();

router.get('/', getHeadlines);

module.exports = router;
