import usersModel from "./models/User.js";

export default class Users {
    getUsers = (params) =>{
        return usersModel.find(params);
    }
    getUserById = (id) =>{
        return usersModel.findOne({_id:id}).lean();
    }

    getUserByEmail = (email) =>{
        return usersModel.findOne({email})
    }
    saveUser = (user) =>{
        return usersModel.create(user);
    }

}