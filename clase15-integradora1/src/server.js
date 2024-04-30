const express = require('express')
const handlebars = require('express-handlebars')

const viewsRouter = require('./routes/views.router.js')
const usersRouter = require('./routes/api/users.router.js')
const { connectDB } = require('./config/index.js')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

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

// url-base/api/productos -> json


app.listen(PORT, err => {
    if (err) console.log('Error: ', err)
    console.log(`listener on port: ${PORT}`)
})