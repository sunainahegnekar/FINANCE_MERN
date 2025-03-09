const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
    const { category, amount, description } = req.body;
    try {
        const expense = new Expense({ user: req.user.id, category, amount, description });
        await expense.save();
        res.json(expense);
    } catch (error) {
        throw new Error('Error creating expense');
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id });
        res.json(expenses);
    } catch (error) {
        throw new Error('Error fetching expenses');
    }
};