import Users from "../dao/Mongo/Users.js";
import { createHash, validatePassword } from "../utils.js";
import jwt from 'jsonwebtoken';

const userService = new Users();

const register = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
        const exists = await userService.getUserByEmail(email);
        if(exists) return res.status(400).send({status:"error", error:"User already exists"})
        const hashedPassword = await createHash(password);
        const user = {
            first_name,
            last_name,
            email,
            password: hashedPassword
        }
        const result = await userService.saveUser(user);
        res.send({ status: "success", payload: result._id })
    } catch(error){
        console.log("error");
        res.status(500).send({ status: "error", error})
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
    const user = await userService.getUserByEmail(email);
    if (!user) return res.status(400).send({ status: "error", error: "User doesn't exist" });
    const passwordValidation = await validatePassword(user, password);
    if (!passwordValidation) return res.status(400).send({ status: "error", error: "Incorrect credentials" });
    const token = jwt.sign(user.toObject(),'C0DerSecret',{expiresIn:30});
    res.cookie('CoderCookie',token).send({status:"success",message:"logged in",payload:user._id})
}

export default {

    register,
    login

}