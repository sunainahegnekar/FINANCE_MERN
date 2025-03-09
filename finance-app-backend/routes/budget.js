const express = require('express');
const router = express.Router();
const { createBudget, getBudgets } = require('../controllers/budgetController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.post('/', createBudget);
router.get('/', getBudgets);

module.exports = router;