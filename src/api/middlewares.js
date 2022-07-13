const preLogApi = (req, res, next) => {
    logger.info({
        message: 'request to api',
        method: req.method,
        ip: req.ip,
        endpoint: req.originalUrl
    });
    next();
};

module.exports = { preLogApi };