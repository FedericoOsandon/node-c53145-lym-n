const { Schema, model } = require('mongoose')

const usersSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true, 
        required: true
    },
    password: String,
    role: {
        type: String,
        enum: ['user', 'user_premium', 'admin'],
        default: 'user'
    },
    cartID: {
        type: Schema.ObjectId,
        ref: 'carts'
    }
})

const usersModel = model('users', usersSchema)

module.exports = {
    usersModel
}