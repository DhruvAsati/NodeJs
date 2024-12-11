const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url} - IP: ${req.ip}`);
    next(); // Pass control to the next middleware or route handler
};

module.exports = requestLogger;
