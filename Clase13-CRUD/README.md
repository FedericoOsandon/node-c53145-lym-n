- use colegio
- db.createCollection('estudiantes')
- db.estudiantes.insertMany([{nombre: 'Federico', apellido: 'Osandón', curso: 'Primero', edad: 14, correo: 'f@gmail.com', sexo: 'M'}, {nombre: 'Juan', apellido: 'Perez', curso: 'Primero', edad: 14, correo: 'j@gmail.com', sexo: 'M'}, {nombre: 'Marcelo', apellido: 'Rodriguez', curso: 'Segundo', edad: 15, correo: 'm@gmail.com', sexo: 'M'}, {nombre: 'Lucía', apellido: 'Mamaní', curso: 'Tercero', edad: 15, correo: 'l@gmail.com', sexo: 'F'},{nombre: 'Rosa', apellido: 'Peralta', curso: 'Quinto', edad: 17, correo: 'r@gmail.com', sexo: 'F'}])

- db.estudiantes.find({})
- db.estudiantes.find({sexo: 'M'})
- db.estudiantes.countDocuments()
- db.estudiantes.countDocuments({sexo: 'F'})


db.estudiantes.find(nombre: '/^fe/')
db.estudiantes.find()
db.estudiantes.find()


// ejemplo parte dos 

- db.estudiantes.insertOne({nombre: 'Juan'})
- db.estudiantes.insertMany([{nombre: 'Pedro', apellido: 'Sanchez', curso: 'Cuarto', edad: 17, correo: 'p@gmail.com', sexo: 'M'}, {nombre: 'Sofía', apellido: 'García', curso: 'Segundo', edad: 18, correo: 'g@gmail.com', sexo: 'F'}, {nombre: 'Marcelo', apellido: 'Martinez', curso: 'Quinto', edad: 25, correo: 'ma@gmail.com', sexo: 'M'}, {nombre: 'María', apellido: 'Sárate', curso: 'Tercero', edad: 30, correo: 's@gmail.com', sexo: 'F'},{nombre: 'Rosa', apellido: 'López', curso: 'Segundo', edad: 35, correo: 'ro@gmail.com', sexo: 'F'}])

// sort ordenamiento
db.estudiantes.find({}).sort(edad: 1) -> campo 1 asc -1 desc
db.estudiantes.find()

// proyeccción
- db.estudiantes.find({ }, {apellido:1, curso: 1, _id: 0}) -> mostra el apellido y el curso, pero no el _id

skip -> saltar