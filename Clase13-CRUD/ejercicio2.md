Sobre la base y los datos cargados anteriormente
Insertar cinco documentos más en la colección clientes con los siguientes datos:
{ "nombre" : "Pablo", "edad" : 25 }
{ "nombre" : "Juan", "edad" : 22 }
{ "nombre" : "Lucia", "edad" : 25 }
{ "nombre" : "Juan", "edad" : 29 }
{ "nombre" : "Fede", "edad" : 35 }

Listar todos los documentos de la colección clientes ordenados por edad descendente.
Listar el cliente más joven.
Listar el segundo cliente más joven.
Listar los clientes llamados 'Juan'
Listar los clientes llamados 'Juan' que tengan 29 años.
Listar los clientes llamados 'Juan' ó 'Lucia'.
Listar los clientes que tengan más de 25 años.
Listar los clientes que tengan 25 años ó menos.
Listar los clientes que NO tengan 25 años.
Listar los clientes que estén entre los 26 y 35 años.
Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.
Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.
Borrar los clientes que se llamen 'Juan' y listar verificando el resultado.
Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor.

- db.clientes.insertOne({"nombre" : "Pablo", "edad" : 25})
- db.clientes.insertOne({"nombre" : "Juan", "edad" : 22});
- db.clientes.insertOne({"nombre" : "Lucia", "edad" : 25});
- db.clientes.insertOne({"nombre" : "Juan", "edad" : 29});
- db.clientes.insertOne({"nombre" : "Fede", "edad" : 35});

<!-- Para listar todos los documentos de la colección "clientes" ordenados por edad descendente: -->
- db.clientes.find().sort({edad: -1})

<!-- Para listar el cliente más joven: -->
- db.clientes.find().sort({edad: 1}).limit(1);

<!-- Para listar el segundo cliente más joven: -->
- db.clientes.find().sort({edad: 1}).limit(2).skip(1)

<!-- Para listar los clientes llamados 'Juan': -->
- db.clientes.find({"nombre": "Juan"});

Para listar los clientes llamados 'Juan' que tengan 29 años:
- db.clientes.find({"nombre": "Juan", "edad": 29});

<!-- Para listar los clientes llamados 'Juan' ó 'Lucia': -->
- db.clientes.find({$or: [{"nombre": "Juan"}, {"nombre": "Lucia"}]});

<!-- Para listar los clientes que tengan más de 25 años: -->
- db.clientes.find({"edad": {$gt: 25}});

<!-- Para listar los clientes que tengan 25 años ó menos: -->
- db.clientes.find({"edad": {$lte: 25}});

<!-- Para listar los clientes que NO tengan 25 años: -->
- db.clientes.find({"edad": {$ne: 25}});

<!-- Para listar los clientes que estén entre los 26 y 35 años: -->
- db.clientes.find({"edad": {$gt: 25, $lt: 36}});

<!-- Para actualizar la edad de Fede a 36 años: -->
- db.clientes.updateOne({"nombre": "Fede"}, {$set: {"edad": 36}})
- db.clientes.find({edad: {$gt: 25, $lt: 36}})

<!-- Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado: -->
- db.clientes.updateMany({edad: 25}, {$inc: {edad: 1}})
- db.clientes.find({edad: {$gt: 25, $lt: 36}})

<!-- Borrar los clientes que se llamen 'Juan' y listar verificando el resultado: -->
- db.clientes.deleteMany({nombre: "Juan"})
- db.clientes.find()

<!-- Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor: -->
- db.estudiantes.deleteMany({})
- db.estudiantes.find()

db.clientes.insertMany([{"nombre" : "Pablo", "edad" : 25},{"nombre" : "Juan", "edad" : 22},{"nombre" : "Lucia", "edad" : 25},{"nombre" : "Juan", "edad" : 29},{"nombre" : "Fede", "edad" : 35}])

