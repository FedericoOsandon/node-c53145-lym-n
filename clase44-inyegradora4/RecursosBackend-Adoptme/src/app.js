const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser')

const usersRouter = require('./routes/users.router.js' )
const petsRouter = require('./routes/pets.router.js' )
const adoptionsRouter = require('./routes/adoption.router.js' )
const sessionsRouter = require('./routes/sessions.router.js')

const cors = require('cors')
// logger
const { loggerMiddleware } = require('./middlewars/logger.middleware.js')
const { logger } = require('./config/logger.config.js')
// sweagger
const { swaggerOptions } = require('./config/swagger.config.js')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')

const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(`mongodb://localhost:27017/adoptame`)

app.use(express.json())
app.use(cookieParser())
app.use(loggerMiddleware)
app.use(cors())

const specs = swaggerJsDoc(swaggerOptions)
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use('/api/users',usersRouter) 
app.use('/api/pets',petsRouter) 
app.use('/api/adoptions',adoptionsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=> logger.info(`Listening on ${PORT}`) )

