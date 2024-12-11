const express = require('express');
const { shortenUrl, redirectUrl, getAnalytics } = require('./urlController');
const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:shortCode', redirectUrl);  // Make sure this route is present
router.get('/analytics', getAnalytics);

module.exports = router;
