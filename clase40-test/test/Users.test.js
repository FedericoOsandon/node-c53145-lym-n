const Users    = require("../src/dao/Users.dao.js")
const Asserts  = require('assert')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/adoptame')
const assert = Asserts.strict


describe('Test users Dao', ()=>{
    before(function () {
        this.userDao = new Users()
    })

    beforeEach(function() {
        mongoose.connection.collections.users.drop()
        this.timeout(5000)
    })
    it('El dao debe obtener los usuarios en formato arreglo', async function(){
        // las acciones a ejecutar
        // console.log(this.userDao)
        const result = await this.userDao.get()
        console.log(result)
        assert.strictEqual(Array.isArray(result), true)
    })
    it('El dao debe agregar un usuario correctamente a la base de datos', async function(){
        let mockUser = {
            first_name: 'Federico',
            last_name: 'Osandón',
            email: 'f1@gmail.com',
            password: '123456'            
        }

        const result = await this.userDao.save(mockUser)
    
        assert.ok(result._id)
        // assert.deepStrictEqual(result.pets, [])
        // assert.strictEqual(typeof user)
    })

    it('El dao puede obtener a un usuario por email', async function () {
        let mockUser = {
            first_name: 'Federico',
            last_name: 'Osandón',
            email: 'f1@gmail.com',
            password: '123456'            
        }

        const result = await this.userDao.save(mockUser) 
        const user   = await this.userDao.getBy({email: result.email})

        assert.strict(typeof user, 'object')
    })

})