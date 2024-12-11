const loggingMiddleware = (req, res, next) => {
    const startTime = Date.now(); // Capture request start time
    const { method, url } = req; // Extract HTTP method and URL
    const timestamp = new Date().toISOString(); // Current timestamp

    console.log(`[${timestamp}] ${method} ${url} - Processing request`);

    // Proceed to next middleware/handler
    res.on('finish', () => {
        const endTime = Date.now(); // Capture end time
        const timeTaken = endTime - startTime; // Calculate time taken
        console.log(`[${timestamp}] ${method} ${url} - Completed in ${timeTaken}ms`);
    });

    next();
};

module.exports = loggingMiddleware;
