
const express = require('express');
const { fetchFeed } = require('../controllers/feedController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, fetchFeed);

module.exports = router;
