const { dirname } = require('path')
console.log(dirname(__dirname))
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de app para adoptar mascotas', 
            description: 'Esta es una descripción de la documentación para la app de mascotas'
        }
    },
    apis: [`${dirname(__dirname)}/docs/**/*.yaml`]
}
