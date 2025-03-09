const express = require('express');
const router = express.Router();
const { createIncome, getIncomes } = require('../controllers/incomeController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.post('/', createIncome);
router.get('/', getIncomes);

module.exports = router;