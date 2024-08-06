const chai    = require('chai')
const UserDTO = require('../src/dto/User.dto')
const { createHash, passwordValidation } = require('../src/utils/index')

const expect = chai.expect

describe('Testing Bcrypt utilidad', () => {
    it('El servicio debe devolver un haseo efectivo del password', async () => {
        const password = '123456'
        const hashPassword = await createHash(password)
        // console.log(hashPassword)
        expect(hashPassword).to.not.equal(password)
    })

    it('El haseo realizado debe poder compararse de manera efectiva con el pass original', async ()=>{
        const password = '123456'
        const hashPassword = await createHash(password)

        const isValidPassword = await passwordValidation({password: hashPassword}, password)
        // expect(isValidPassword).to.be.ok
        expect(isValidPassword).to.be.true
    })
    it('El haseo realizado al ser alterado debe fallar la prueba', async ()=>{
        const password = '123456'
        const hashPassword = await createHash(password)
        const hashAlterado = hashPassword+'10'

        const isValidPassword = await passwordValidation({password: hashAlterado}, password)
       
        expect(isValidPassword).to.be.false
    })


})

describe('Testing del userDto', ()=>{
    before(function (){
        this.userDto = UserDTO
    })

    it('El dto debe unificar el nombre y el apellido en única propiedad llamada name', function(){
        const userMock = {
            first_name: 'Federico',
            last_name: 'Osandón',
            email: 'f@gmail.com',
            password: '123456',
        }
        const userDtoToken = this.userDto.getUserTokenFrom(userMock)
        expect(userDtoToken).to.have.property('name', 'Federico Osandón')

    })
    it('El dto debe unificar el nombre y el apellido en única propiedad llamada name', function(){
        const userMock = {
            first_name: 'Federico',
            last_name: 'Osandón',
            email: 'f@gmail.com',
            password: '123456',
        }
        const userDtoToken = this.userDto.getUserTokenFrom(userMock)

        expect(userDtoToken).to.not.have.property('first_name')
        expect(userDtoToken).to.not.have.property('last_name')
        expect(userDtoToken).to.not.have.property('password')

    })
})