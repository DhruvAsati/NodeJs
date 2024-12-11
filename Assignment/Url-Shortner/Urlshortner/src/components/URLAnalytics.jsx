import React, { useState, useEffect } from 'react';
import axios from 'axios';

function URLAnalytics() {
    const [analyticsData, setAnalyticsData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/analytics`);
                setAnalyticsData(response.data);
            } catch (err) {
                setError("Failed to fetch analytics data");
                console.error("Error fetching analytics data:", err);
            }
        };

        fetchAnalytics();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!analyticsData) {
        return <div>Loading analytics data...</div>;
    }

    return (
        <div>
            <h1>Analytics</h1>
            <p>Total Requests: {analyticsData.totalRequests}</p>
            <p>Most Visited URL: {analyticsData.mostVisitedUrl}</p>
        </div>
    );
}

export default URLAnalytics;
