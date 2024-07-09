import { Schema, model }  from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const userCollection = 'users'

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['user','user-premium','admin'],
        default: 'user'
    }
})
// odm 

userSchema.plugin(mongoosePaginate)

export const userModel = model(userCollection, userSchema)
