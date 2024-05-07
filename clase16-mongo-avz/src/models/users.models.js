import { Schema, model }  from "mongoose"

const userCollection = 'usuarios'

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
export const userModel = model(userCollection, userSchema)
