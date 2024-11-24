const express = require('express');
const cors = require('cors');
const jokes = require('./jokes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Random Jokes API!');
});

// Random Jokes Endpoint  // url : http://localhost:3000/api/jokes/random
app.get('/api/jokes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.json({ joke: randomJoke });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
