const chai     = require('chai')
const mongoose = require('mongoose')
const Users    = require("../src/dao/Users.dao.js")

const expect = chai.expect
mongoose.connect('mongodb://127.0.0.1:27017/adoptame')

describe('Test de users dao', ()=>{
    before(function (){
        this.userDao = new Users
    })

    beforeEach(function() {
        mongoose.connection.collections.users.drop()
        this.timeout(5000)
    })

    it('El dao debe obtener los usuarios en formato arreglo', async function(){
    
        const result = await this.userDao.get()
        // expect(result).to.be.deep.equal([])
    //    expect(result).deep.equal([])
        // expect(Array.isArray(result)).to.be.ok
        expect(Array.isArray(result)).to.be.equals(true)
    })
})