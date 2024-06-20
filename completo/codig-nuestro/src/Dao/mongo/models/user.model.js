const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
// import {} from 'mongoose'

const userCollection = 'users'

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
    cartId:{
        type: Schema.Types.ObjectId,
        ref: 'carts'
    },  
    role: {
        type: String,
        enum: ['admin', 'user', 'premium'],
        default: 'user'
    },
    documents: [
        {
          name: String,
          reference: String,
        }
    ],    
      // Nueva propiedad "last_connection"
    last_connection: {
        type: Date,
        default: Date.now,
    },    
      // Propiedad "isPremium"
    isPremium: {
        type: Boolean,
        default: false,
    }
})

// populate
UserSchema.pre('findOne', function() {
    this.populate('cartId')
})

UserSchema.plugin(mongoosePaginate)

let userModel = model(userCollection, UserSchema)

module.exports = {
    userModel
}