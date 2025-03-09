const Budget = require('../models/Budget');

exports.createBudget = async (req, res) => {
    const { category, amount, month } = req.body;
    try {
        const budget = new Budget({ user: req.user.id, category, amount, month });
        await budget.save();
        res.json(budget);
    } catch (error) {
        throw new Error('Error creating budget');
    }
};

exports.getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({ user: req.user.id });
        res.json(budgets);
    } catch (error) {
        throw new Error('Error fetching budgets');
    }
};