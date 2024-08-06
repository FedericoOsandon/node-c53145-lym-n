import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const usersModel = mongoose.model(collection,schema);
export default usersModel;