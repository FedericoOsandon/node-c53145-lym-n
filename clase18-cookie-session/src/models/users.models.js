import { Schema, model }  from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const userCollection = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: Number,
    email: {
        type: String,
        required: true, 
        unique: true
    },
    gender: String
})
// odm 

userSchema.plugin(mongoosePaginate)

export const userModel = model(userCollection, userSchema)
