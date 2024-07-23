// server base
const express = require('express')
const { UserModel } = require('./model/user.model')
const { dbConection } = require('./config/config')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dbConection()

app.get('/api/user', async (req, res) =>{    
    try {  
        const { limit=5, page=1 }= req.query
        console.log('limit: ', limit)
        console.log('page: ', page)
        const result = await UserModel.paginate({}, {limit, page})           
        res.status(200).send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        console.log(error) 
    }
})

app.post('/api/user', async (req, res) =>{
    //mada el  cliente request 
    try {
        let {first_name, last_name, email, password } = req.body

        if (!first_name || !last_name || !email || !password) {
            return res.status(400).send({ 'error': error})
        }           

        let result= await UserModel.create({            
                        first_name,
                        last_name,
                        email,
                        password
                    })
    
        res.status(201).send({ 
            status: 'success',
            payload: result
        })
        
    } catch (error) {
        console.dir(error)            
    }
        
    
})



app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})


// defe014/usercreator:1.0.0 -> nombre de imagen para subir

// docker tag usercreator defe014/usercreator:1.0.0
// docker push defe014/usercreator:1.0.0