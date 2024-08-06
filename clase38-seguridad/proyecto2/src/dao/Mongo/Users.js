import usersModel from "./models/User.js";

export default class Users {
    getUsers = () =>{
        return usersModel.find();
    }
    getUserById = (id) =>{
        return usersModel.findOne({_id:id});
    }

    getUserByEmail = (email) =>{
        return usersModel.findOne({email})
    }

    saveUser = (user) =>{
        return usersModel.create(user);
    }
}