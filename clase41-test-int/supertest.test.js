const chai      = require('chai')
const supertest = require('supertest')

const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('Test de adoptame', ()=>{
    describe('TEst de mascota', ()=>{
        it('El endpint POST /api/pets debe crear una mascota correctamente', async ()=>{
            const petMock =  {
                name: 'Patitas', 
                specie: 'Pez',
                birthDate: '10-10-2020'
            } 

            const { 
                statusCode,
                ok,
                _body
            } = await requester.post('/api/pets').send(petMock)

            // console.log(ok)
            // console.log(statusCode)
            // console.log(_body)
            expect(_body.payload).to.have.property('_id')
        })
        it('El endpoint GET /api/pets debe traer todas las mascotas correctamente', async ()=>{
            const {
                statusCode,
                ok,
                _body
            } = await requester.get('/api/pets')
            expect(ok).to.be.equal(true)
            expect(statusCode).to.be.equal(200)
        })
        it('El endpoint GET /api/pets/:pid debe traer una mascotas correctamente', async ()=>{
            // lo correcto debería ser crear una mascota
            const pid = '66b40b49edec3c842c0a89fe'

            const {
                statusCode,
                ok,
                _body
            } = await requester.get(`/api/pets/${pid}`)
            console.log(statusCode)
            console.log(ok)
            expect(ok).to.be.equal(true)
            expect(statusCode).to.be.equal(200)
            expect(_body.payload).to.have.property('_id')
        })
    })  
    describe('Test avanzado de Session', () => {
        let cookie
        it('Debe registrar correctamente a un usuario', async ()=>{
            const mockUser = {
                first_name: 'Federico',
                last_name: 'Osandón',
                email: 'f@gmail.com',
                password: '123456'
            }

            const {_body} = await requester.post('/api/sessions/register').send(mockUser)
            expect(_body.payload).to.be.ok

        })
        it('Debe loguear correctamente a un usuario u DEVOLVER UNA COOKIE', async ()=>{
            const mockUser = {
                email: 'f@gmail.com',
                password: '123456'
            }

            const result = await requester.post('/api/sessions/login').send(mockUser)
            const cookieResult = result.headers['set-cookie'][0]
            // cookieResult = 'coderCookie=lñakhsdfkhaskfasfhksaf.as,dfashajsdfasdfhahsfdkhsafdksadfksda'
            expect(cookieResult).to.be.ok
            cookie = {
                name: cookieResult.split('=')[0],
                value: cookieResult.split('=')[1]
            }
            expect(cookie.name).to.be.ok.and.eql('coderCookie')
            expect(cookie.value).to.be.ok
        })

        it('Debe enviar la cookie que contiene elusurio y destructurar este correctamente', async ()=>{
            const {_body} = await requester.get('/api/sessions/current').set('cookie', [`${cookie.name}=${cookie.value}`])
            // console.log(_body)
            expect(_body.payload.email).to.be.eql('f@gmail.com')
        })
    })

    describe('Test de Uploads', ()=>{
        it('El servicio debe crear una mascota con la ruta de imagen', async () => {
            const petMock = {
                name: 'Aletitas',
                specie: 'Perro',
                birthDate: '10-10-2022'
            }
            const result = await requester.post('/api/pets/withimage')
                                    .field('name', petMock.name)
                                    .field('specie', petMock.specie)
                                    .field('birthDate', petMock.birthDate)
                                    .attach('image', './test/patitas.jpeg')

            expect(result.statusCode).to.be.eql(200)
            expect(result._body.payload).to.have.property('_id')
            expect(result._body.payload.image).to.be.ok
            

        })
    })
})