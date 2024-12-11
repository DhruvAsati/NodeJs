const shortid = require('shortid');
const Url = require('./urlModel');

// Shorten URL
exports.shortenUrl = async (req, res) => {
    const { longUrl } = req.body;

    // Generate a unique short code
    const shortCode = shortid.generate();

    try {
        // Check if the long URL already exists in the database
        const existingUrl = await Url.findOne({ longUrl });

        if (existingUrl) {
            return res.status(200).json({ shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}` });
        }

        // Create a new URL document with the long URL and short code
        const url = new Url({ longUrl, shortCode });
        await url.save();

        // Return the shortened URL to the user
        res.status(200).json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Redirect URL
exports.redirectUrl = async (req, res) => {
    const { shortCode } = req.params;
    console.log('Received shortCode:', shortCode);  // Log shortCode

    try {
        const url = await Url.findOne({ shortCode });
        if (!url) {
            console.log('URL not found for shortCode:', shortCode);  // Log if not found
            return res.status(404).json({ error: 'URL not found' });
        }

        url.clicks++;
        await url.save();
        return res.redirect(url.longUrl);
    } catch (err) {
        console.error('Error redirecting URL:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get Analytics (list all URLs with clicks)
exports.getAnalytics = async (req, res) => {
    try {
        // Fetch all URLs and display the long URL, short code, and click count
        const urls = await Url.find({}, { longUrl: 1, shortCode: 1, clicks: 1, _id: 0 });

        // Send the analytics data back to the client
        res.status(200).json(urls);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch analytics data' });
    }
};
