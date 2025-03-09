const Income = require('../models/Income');

exports.createIncome = async (req, res) => {
    const { source, amount } = req.body;
    try {
        const income = new Income({ user: req.user.id, source, amount });
        await income.save();
        res.json(income);
    } catch (error) {
        throw new Error('Error creating income');
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ user: req.user.id });
        res.json(incomes);
    } catch (error) {
        throw new Error('Error fetching incomes');
    }
};