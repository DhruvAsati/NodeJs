### **Solution: Building a Random Jokes API in Node.js**

Below is a step-by-step implementation for creating the Random Jokes API using **Node.js** and **Express.js**.

---

### **Project Setup and Installation**

1. **Initialize the Project**:
   ```bash
   mkdir random-jokes-api
   cd random-jokes-api
   npm init -y
   ```

2. **Install Dependencies**:
   ```bash
   npm install express cors nodemon
   ```

3. **Setup Basic Project Structure**:
   Create the following files:
   - `index.js`: Main server file.
   - `jokes.js`: Store predefined jokes.
   - `README.md`: Project documentation.

---

### **Server Implementation**

**`index.js`: The Main Server**

```javascript
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

// Random Jokes Endpoint
app.get('/api/jokes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.json({ joke: randomJoke });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

**`jokes.js`: Predefined Jokes**

```javascript
module.exports = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why was the math book sad? It had too many problems.",
    "Why couldn’t the bicycle stand up by itself? It was two tired.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "How does a penguin build its house? Igloos it together.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What do you call a bear with no teeth? A gummy bear!"
];
```

---

### **Testing the API**

**Using Postman or a similar tool:**

1. Start the server:
   ```bash
   npm start
   ```

2. Test the endpoints:
   - **GET `/`**: Should return a welcome message.
   - **GET `/api/jokes/random`**: Should return a random joke in JSON format, e.g.:
     ```json
     {
         "joke": "Why don't scientists trust atoms? Because they make up everything!"
     }
     ```

---

### **README Documentation**

**`README.md`**

```markdown
# Random Jokes API

A simple Node.js API for fetching random jokes.

## Features

- Fetch a random joke using the endpoint `/api/jokes/random`.
- Includes 10 predefined jokes.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd random-jokes-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Usage

- Base URL: `http://localhost:3000`
- Endpoints:
  - `/`: Welcome message.
  - `/api/jokes/random`: Fetches a random joke.

## Example Response

```json
{
    "joke": "Why don't scientists trust atoms? Because they make up everything!"
}
```

## Testing

- Use Postman or any HTTP client to test the endpoints.
- Example request:
  - **GET** `http://localhost:3000/api/jokes/random`

## Project Structure

```
random-jokes-api/
├── index.js        # Main server file
├── jokes.js        # Predefined jokes
├── package.json    # Project metadata
└── README.md       # Project documentation
```

## Challenges

- Choosing the best jokes! 😄

## License

This project is licensed under the MIT License.
```

---

### **Submission Checklist**

1. **GitHub Repository**: Upload the project files, including:
   - `index.js`
   - `jokes.js`
   - `README.md`
   - `package.json`
   - `.gitignore` (optional for `node_modules`)

2. **Documentation**:
   - The README should include setup instructions, endpoint details, and usage examples.

3. **Video Explanation**:
   - A short video explaining the project, testing the endpoints in Postman, and reviewing the code.

4. **Screenshots**:
   - Screenshot of the API response in Postman for `/api/jokes/random`.

---

### **Extended Ideas**

1. **Add a Category System**:
   - Group jokes into categories like "Science," "Puns," etc., and create endpoints like `/api/jokes/:category`.

2. **Integration with Third-Party Joke API**:
   - Fetch jokes dynamically from APIs like [JokeAPI](https://jokeapi.dev/).

3. **Database Support**:
   - Store jokes in a database for easier management and scalability.