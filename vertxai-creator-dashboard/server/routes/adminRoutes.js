
const express = require('express');
const { updateCredits } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.put('/credits', protect, updateCredits);

module.exports = router;
