use baseCRUD
db.createCollection("mascotas")
db.mascotas.insertMany([
    { nombre: "Max", especie: "Perro", edad: 5 },
    { nombre: "Mia", especie: "Gato", edad: 3 },
    { nombre: "Toby", especie: "Perro", edad: 2 }
])
db.mascotas.find({ especie: "Perro" }).pretty()
db.mascotas.estimatedDocumentCount()

El valor estimado se obtiene porque MongoDB utiliza un mecanismo interno llamado "Sample Size Estimation" para determinar el número de documentos en una colección. Este mecanismo es eficiente y rápido, pero no garantiza una exactitud absoluta en el número de documentos.

El valor estimado puede ser diferente del número real de documentos en una colección debido a diferentes razones, como la eliminación de documentos, la adición de nuevos documentos o la actualización de documentos existentes. Además, el número estimado puede ser menor o mayor que el número real dependiendo de la cantidad de documentos en la colección.

Por lo tanto, no se puede garantizar que el valor estimado sea siempre verdadero, sino que debe ser utilizado con precaución y solo como una aproximación rápida del número de documentos en una colección. Si se requiere una precisión absoluta, es mejor utilizar el método countDocuments() o el método find().count().