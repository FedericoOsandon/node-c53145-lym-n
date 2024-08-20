const { usersService } = require("../services/index.js");
const { createHash } = require("../utils/index.js");

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}


const createUser = async (req,res)=>{
    const {first_name,last_name,password,email} = req.body
    const newUser = {
        first_name: first_name,
        last_name: last_name,
        password: await createHash(password),
        email: email
    }
    const result = await usersService.create(newUser);
    res.send({status:"success",message:"User created"})
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}

module.exports = {
    deleteUser,
    getAllUsers,
    createUser,
    getUser,
    updateUser
}