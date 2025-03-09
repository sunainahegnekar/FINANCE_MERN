const express = require('express');
const router = express.Router();
const { getReport } = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.get('/', getReport);

module.exports = router;