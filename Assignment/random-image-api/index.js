const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Define the route to fetch a random image
app.get('/api/image/random', async (req, res) => {
    try {
        // Fetch a random image using Lorem Picsum API
        const response = await axios.get('https://picsum.photos/200/300', {
            responseType: 'arraybuffer', // Ensures we handle binary data properly
        });

        // Convert the binary data to a Base64 encoded image string
        const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
        const imageUrl = `data:image/jpeg;base64,${imageBase64}`;

        res.status(200).json({ 
            success: true, 
            message: "Random image fetched successfully", 
            image: imageUrl 
        });
    } catch (error) {
        console.error('Error fetching random image:', error.message);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch random image', 
            error: error.message 
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
