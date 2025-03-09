const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please provide name, email, and message' });
    }
    // Here you could save to a database or send an email
    console.log('Contact Form Submission:', { name, email, message });
    res.json({ msg: 'Message received' });
});

module.exports = router;