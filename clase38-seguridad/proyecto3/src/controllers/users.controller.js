import Users from "../dao/Mongo/Users.js"

const userService = new Users();

const getUsers = async(req,res) =>{
    const query = req.query;
    const result = await userService.getUsers(query);
    res.send({status:"success",payload:result})
}

const getUser = async(req,res) =>{
    const id = req.params.uid;
    const user = await userService.getUserById(id);
    res.send({status:"success",payload:user})
}

export default {
    getUsers,
    getUser
}