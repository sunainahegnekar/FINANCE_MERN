const Budget = require('../models/Budget');
const Expense = require('../models/Expense');
const Income = require('../models/Income');

exports.getReport = async (req, res) => {
    const { month } = req.query; // e.g., "2025-03"
    try {
        const budgets = await Budget.find({ user: req.user.id, month });
        const expenses = await Expense.find({ user: req.user.id, date: { $regex: month } });
        const incomes = await Income.find({ user: req.user.id, date: { $regex: month } });

        const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
        const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
        const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);

        res.json({
            totalBudget,
            totalExpense,
            totalIncome,
            savings: totalIncome - totalExpense,
        });
    } catch (error) {
        throw new Error('Error generating report');
    }
};