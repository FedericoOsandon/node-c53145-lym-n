import winston from 'winston'

// primer paso configuramos un loggs con consola.
// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             level: 'http'
//         })
//     ]
// })

// paso 2 - agregando mas tranportes
// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             level: 'http'
//         }),
//         new winston.transports.File({
//             filename: './errors.log',
//             level: 'warn'
//         })
//     ]
// })

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'red',
        warning: 'yellow',
        info: 'blue',
        debug: 'white'
    }
}
// paso 3 - agregando nuestro custom level
export const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './errors.log',
            level: 'warning',
            format: winston.format.simple()
        })
    ]
})

// middleware 
export const addLogger = ( req, res, next ) => {
    req.logger = logger
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toLocaleString()}`)
    next()
}