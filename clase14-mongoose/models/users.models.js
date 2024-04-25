import { Schema, model }  from "mongoose"

const userCollection = 'usuarios'

const userSchema = new Schema({
    first_name: String,
    last_name: Number,
    email: {
        type: String,
        required: true, 
        unique: true
    }
})
// odm 
export const userModel = model(userCollection, userSchema)
