const { adoptionsService, petsService, usersService } = require("../services/index.js")

const getAllAdoptions = async(req,res)=>{
    const result = await adoptionsService.getAll();
    res.send({status:"success",payload:result})
}

const getAdoption = async(req,res)=>{
    const adoptionId = req.params.aid;
    const adoption = await adoptionsService.getBy({_id:adoptionId})
    if(!adoption) return res.status(404).send({status:"error",error:"Adoption not found"})
    res.send({status:"success",payload:adoption})
}

const createAdoption = async(req,res)=>{
    const {uid,pid} = req.params;
    console.log(uid,pid)

    const user = await usersService.getUserById(uid);
    console.log(user)
    if(!user) return res.status(404).send({status:"error", error:"user Not found"});
    
    const pet = await petsService.getBy({_id:pid});
    console.log(pet)
    if(!pet) return res.status(404).send({status:"error",error:"Pet not found"});
    if(pet.adopted) return res.status(400).send({status:"error",error:"Pet is already adopted"});
    
    user.pets.push(pet._id);

    await usersService.update(user._id,{pets:user.pets})

    await petsService.update(pet._id,{adopted:true,owner:user._id})

    await adoptionsService.create({owner:user._id,pet:pet._id})

    res.send({status:"success",message:"Pet adopted"})
}

module.exports = {
    createAdoption,
    getAllAdoptions,
    getAdoption
}