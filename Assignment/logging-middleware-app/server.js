require('dotenv').config(); // Load .env file

const express = require('express');
const loggingMiddleware = require('./middleware/loggingMiddleware');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Use Logging Middleware
app.use(loggingMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the Logging Middleware App!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
