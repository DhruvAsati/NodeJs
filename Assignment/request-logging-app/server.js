require('dotenv').config(); // Load environment variables
const express = require('express');
const { debugLogger, infoLogger } = require('./Middleware/logginglevels');
const app = express();

const PORT = 3000;

// Apply Middleware Based on LOG_LEVEL
app.use(debugLogger);
app.use(infoLogger);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Logging Levels App!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
