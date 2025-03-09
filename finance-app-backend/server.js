const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/budget', require('./routes/budget'));
app.use('/api/expense', require('./routes/expense'));
app.use('/api/income', require('./routes/income'));
app.use('/api/report', require('./routes/report'));
app.use('/api/contact', require('./routes/contact'));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));