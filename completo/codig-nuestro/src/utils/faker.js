const {faker} = require('@faker-js/faker')

faker.locale = 'es'

const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        departament: faker.commerce.department(),
        stock: faker.random.numeric(1),
        description: faker.commerce.productDescription(),
        id: faker.database.mongodbObjectId(),
        imagen: faker.image.image()
    }
}

exports.genereateUser = () => {
    let numOfProducts = parseInt(faker.random.numeric(1, {banneDigits: ['0']}))
    let products = []
    for(let i=0; i<numOfProducts; i++){
        products.push(generateProduct())
    }
    return {
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        sex: faker.name.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        products,
        imagen: faker.image.avatar(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email()
        // password: faker.internet.password(),
        // direccion: faker.address.streetAddress(),
        // ciudad: faker.address.city(),
        // provincia: faker.address.state(),
        // codigo_postal: faker.address.zipCode(),
        // pais: faker.address.country(),
        // rol: 'user'
    }
}