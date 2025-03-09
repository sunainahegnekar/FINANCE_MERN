const express = require('express');
const router = express.Router();
const { createExpense, getExpenses } = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.post('/', createExpense);
router.get('/', getExpenses);

module.exports = router;