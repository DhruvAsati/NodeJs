const debugLogger = (req, res, next) => {
    if (process.env.LOG_LEVEL === 'debug') {
        console.debug(`[DEBUG] ${new Date().toISOString()} - ${req.method} ${req.url} - IP: ${req.ip}`);
    }
    next();
};

const infoLogger = (req, res, next) => {
    if (['info', 'debug'].includes(process.env.LOG_LEVEL)) {
        console.info(`[INFO] ${new Date().toISOString()} - ${req.method} ${req.url}`);
    }
    next();
};

module.exports = { debugLogger, infoLogger };
