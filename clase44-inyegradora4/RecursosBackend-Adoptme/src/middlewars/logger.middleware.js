const { logger } = require("../config/logger.config")


exports.loggerMiddleware = (req, res, next) => {
    req.logger = logger
    req.logger.info(`${req.method} en path: ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}