# Random Image API

## Project Description
This project is a simple RESTful API built using **Node.js** and **Express.js**. The API generates and serves a random image using [Lorem Picsum](https://picsum.photos/). The response includes:
- A Base64-encoded version of the image.
- A direct URL link to the random image.

This project introduces fundamental backend development concepts such as server setup, routing, and API development using third-party services.

---

## Features
- Random image generation using a third-party API.
- JSON response with both:
  - A Base64-encoded image (embeddable in HTML).
  - A direct image URL.
- Robust error handling for better debugging and client interaction.

---

## Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/random-image-api.git
   cd random-image-api
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Then, install the required packages:
   ```bash
   npm install
   ```

3. **Run the Server**:
   Start the server:
   ```bash
   node index.js
   ```

4. **Access the API**:
   Open your browser or use a tool like Postman to send a `GET` request to:
   ```
   http://localhost:3000/api/image/random
   ```

---

## API Endpoints

### `GET /api/image/random`
- **Description**: Fetches a random image from Lorem Picsum.
- **Response Format**:
  ```json
  {
      "imageBase64": "data:image/jpeg;base64,<Base64-encoded string>",
      "directLink": "https://picsum.photos/200/300"
  }
  ```
- **Sample Response**:
  ```json
  {
      "imageBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
      "directLink": "https://picsum.photos/200/300"
  }
  ```

---

## Tools Used
- **Node.js**: A JavaScript runtime for backend development.
- **Express.js**: A web framework for Node.js to create the server and handle routes.
- **Axios**: A promise-based HTTP client for fetching the random image.
- **Lorem Picsum**: A third-party API for random image generation.

---

## Testing
- Use **Postman** or a similar tool to test the API:
  - Send a `GET` request to `http://localhost:3000/api/image/random`.
  - Verify that the response contains both the Base64 string and the direct URL.
- Alternatively, access the endpoint in a browser for the JSON response.

---

## Challenges and Solutions
- **Challenge**: Fetching the random image and handling binary data.
  - **Solution**: Used Axios with `responseType: 'arraybuffer'` to retrieve image data as binary.
- **Challenge**: Encoding the binary image into Base64.
  - **Solution**: Converted the buffer data using Node.js's `Buffer` class.

---

## Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Lorem Picsum](https://picsum.photos/)
- [Axios](https://axios-http.com/)
