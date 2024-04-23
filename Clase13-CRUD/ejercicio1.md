use colegio
db.createCollection("estudiantes")
db.estudiantes.insertMany([
  {nombre: "Juan", apellido: "Pérez", curso: "Programación", edad: 20, correo: "juanperez@email.com", sexo: "H"},
  {nombre: "María", apellido: "Gómez", curso: "Base de datos", edad: 22, correo: "mariagomez@email.com", sexo: "M"},
  {nombre: "Pedro", apellido: "Rodríguez", curso: "Redes", edad: 19, correo: "pedrorodriguez@email.com", sexo: "H"},
  {nombre: "Sofía", apellido: "Martínez", curso: "Seguridad", edad: 21, correo: "sofiamartinez@email.com", sexo: "M"},
  {nombre: "Lucas", apellido: "Sánchez", curso: "Programación", edad: 18, correo: "lucassanchez@email.com", sexo: "H"}
])
db.estudiantes.insertOne({nombre: "Ana", apellido: "López", curso: "Diseño gráfico"})
db.estudiantes.find({})
db.estudiantes.find({sexo: "H"})
db.estudiantes.countDocuments()
db.estudiantes.countDocuments({sexo: "M"})