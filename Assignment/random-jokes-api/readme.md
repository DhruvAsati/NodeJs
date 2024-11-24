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