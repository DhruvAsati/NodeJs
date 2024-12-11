import React, { useState } from 'react';
import axios from 'axios';

function URLForm() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/shorten', { longUrl });
            setShortUrl(response.data.shortUrl);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter long URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
                <p>
                    Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                </p>
            )}
        </div>
    );
}

export default URLForm;
