const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
// import {} from 'mongoose'

const userCollection = 'usuarios'

const UserSchema = Schema({
    first_name: {
        type: String,
        index: true,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    full_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

UserSchema.plugin(mongoosePaginate)

let UserModel = model(userCollection, UserSchema)

module.exports = {
    UserModel
}