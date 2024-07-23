const express = require('express')
const handlebars = require('express-handlebars')

const viewsRouter = require('./routes/views.router.js')
const usersRouter = require('./routes/api/users.router.js')
const { connectDB } = require('./config/index.js')

const cookieParser =  require('cookie-parser')
const passport = require('passport')
const { initializePassport } = require('./config/passport.config.js')
const sessionsRouter = require('./routes/api/sessions.router.js')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')

// urbase/productos -> html con productos
// urbase/users
connectDB()

app.use('/', viewsRouter)
app.use('/api/users', usersRouter)
app.use('/api/sessions', sessionsRouter)

// url-base/api/productos -> json


app.listen(PORT, err => {
    if (err) logger.info('Error: ', err)
    logger.info(`listener on port: ${PORT}`)
})