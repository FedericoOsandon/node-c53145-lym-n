const { connect } = require('mongoose')
const dotenv = require('dotenv')
const { commander } = require('../utils/commander')
const { MongoSingleton } = require('./mongoSingleton')

const { mode } = commander.opts()
console.log(mode)
dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

exports.objectConfig = {
    gmail_pass: process.env.GMAIL_PASS,
    gmail_user: process.env.GMAIL_USER
}

exports.connectDB = () => MongoSingleton.getIntance(process.env.MONGO_URL)

