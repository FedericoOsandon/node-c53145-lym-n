
## Comando de apoyo
- mongod
- show dbs
- use < db name>
- db (obj de la base de datos en la que estamos usando)
- show collections
- db.createCollection(<name>)
- db.dropDatabase()
- dn.collection.drop()

## Comandos para un crud:

- use productos
- db.createCollection("productos")
- db.productos.insertOne({
    nombre: "Lápiz",
    descripcion: "Lápiz de grafito negro",
    precio: 0.5
  })
- db.productos.insertMany([
  {
    nombre: "Bolígrafo",
    descripcion: "Bolígrafo azul",
    precio: 0.7
  },
  {
    nombre: "Goma de borrar",
    descripcion: "Goma de borrar blanca",
    precio: 0.3
  }
])
- db.productos.find().pretty()
- db.productos.find({nombre: "Lápiz"}).pretty()
- db.productos.findOne({nombre: "Bolígrafo"})
- db.productos.updateOne({nombre: "Lápiz"}, {$set: {precio: 0.7}})
- db.productos.deleteOne({nombre: "Lápiz"})

## Conteo de datos

- db.productos.countDocuments() (exacto)
- db.productos.estimatedDocumentCount() (aprox)


## buscar con condición 
- db.productos.insertMany([
    { nombre: "Laptop Dell", categoria: "Tecnología", precio: 800 },
    { nombre: "Refrigerador Samsung", categoria: "Electrodomésticos", precio: 400 }
])

- db.productos.find({ categoria: "Tecnología" }).pretty()

## Busquedas mas complejas

db.coll.find( {key: {$operator: val}} ) 
con: 
$and 
$or
$lt
$lte
$gt
$gte
$ne
$eq
$exists
$in
$nin
$size
$all
$elemMatch

Ejemplo con producto: 

db.productos.insertMany([
  {
    name: "Laptop",
    price: 800,
    brand: "Apple",
    categoria: "electrónica",
    colors: ["silver", "gold", "space gray"]
  },
  {
    name: "Smartphone",
    price: 700,
    brand: "Samsung",
    categoria: "electrónica",
    colors: ["black", "white", "blue"]
  },
  {
    name: "Tablet",
    price: 500,
    brand: "Amazon",
    categoria: "ropa",
    colors: ["black", "red"]
  },
  {
    name: "Headphones",
    price: 200,
    brand: "Bose",
    categoria: "electrónica",
    colors: ["black", "silver"]
  },
  {
    name: "Smartwatch",
    price: 400,
    brand: "Apple",
    categoria: "ropa",
    colors: ["rojo", "verde", "azul"]
  }
]);

<!-- // Búsqueda con filtro $and -->
- db.products.find({
  $and: [
    {categoría: "electrónica"},
    {precio: {$gt: 50}}
  ]
})

<!-- // Búsqueda con filtro $or -->
- db.products.find({
  $or: [
    {categoría: "electrónica"},
    {precio: {$gt: 50}}
  ]
})

<!-- // Búsqueda con filtro $lt -->
- db.products.find({precio: {$lt: 50}})

<!-- // Búsqueda con filtro $lte -->
- db.products.find({precio: {$lte: 50}})

<!-- // Búsqueda con filtro $gt -->
- db.products.find({precio: {$gt: 50}})

<!-- // Búsqueda con filtro $gte -->
- db.products.find({precio: {$gte: 50}})

<!-- // Búsqueda con filtro $ne -->
- db.products.find({categoría: {$ne: "electrónica"}})

<!-- // Búsqueda con filtro $eq -->
- db.products.find({categoría: {$eq: "electrónica"}})

<!-- // Búsqueda con filtro $exists -->
- db.products.find({descripción: {$exists: true}})

<!-- // Búsqueda con filtro $in -->
- db.products.find({categoría: {$in: ["electrónica", "ropa"]}})

<!-- // Búsqueda con filtro $nin -->
- db.products.find({categoría: {$nin: ["electrónica", "ropa"]}})

<!-- // Búsqueda con filtro $size -->
- db.products.find({colores: {$size: 3}})

<!-- // Búsqueda con filtro $all -->
- db.products.find({colores: {$all: ["rojo", "verde", "azul"]}})

<!-- // Búsqueda con filtro $elemMatch -->
- db.products.find({
  tallas: {
    $elemMatch: {
      $gt: "M",
      $lt: "XL"
    }
  }
})

## Busquedas avanzadas
- db.coll.distinct( val )
- db.coll.find({doc.subdoc:value})
- db.coll.find({name: /^Max$/i})

<!-- Ejemplo:  -->
<!-- Para insertar esos documentos en MongoDB, puedes usar el comando db.collection.insertMany() en la CLI de MongoDB. Aquí está el código para insertar los cinco documentos que mencionaste: -->


- db.products.insertMany([   
    { "name": "Laptop",     "price": 800, "brand": "Apple"   },   
    { "name": "Smartphone", "price": 700, "brand": "Samsung" },   
    { "name": "Tablet",     "price": 500, "brand": "Amazon"  },   
    { "name": "Headphones", "price": 200, "brand": "Bose"    },   
    { "name": "Smartwatch", "price": 400, "brand": "Apple"   }
])

- db.products.distinct("brand")
    <!-- : devuelve un arreglo con los valores distintos de "brand" en la colección de productos. -->

- db.products.find({"brand": "Apple"}): devuelve todos los documentos que tienen "brand" igual a "Apple".

- db.products.find({"name": /^Smart/i}): devuelve todos los documentos que tienen "name" que comienzan con "Smart". La búsqueda es case-insensitive por la bandera i al final de la expresión regular.

- db.products.find({$and: [{"price": {$gt: 500}}, {"brand": "Apple"}]}): devuelve todos los documentos que tienen "price" mayor a 500 y "brand" igual a "Apple".

- db.products.find({$or: [{"brand": "Apple"}, {"brand": "Bose"}]})
<!-- : devuelve todos los documentos que tienen "brand" igual a "Apple" o igual a "Bose". -->

- db.products.find({$lt: {"price": 600}})
<!-- : devuelve todos los documentos que tienen "price" menor a 600. -->

- db.products.find({$lte: {"price": 500}})
<!-- : devuelve todos los documentos que tienen "price" menor o igual a 500. -->

- db.products.find({$gt: {"price": 500}})
<!-- : devuelve todos los documentos que tienen "price" mayor a 500. -->

- db.products.find({$gte: {"price": 500}})
<!-- : devuelve todos los documentos que tienen "price" mayor o igual a 500. -->

- db.products.find({$ne: {"brand": "Samsung"}})
<!-- : devuelve todos los documentos que no tienen "brand" igual a "Samsung". -->

- db.products.find({$eq: {"brand": "Apple"}})
<!-- : devuelve todos los documentos que tienen "brand" igual a "Apple". -->

- db.products.find({$exists: {"brand": true}})
<!-- : devuelve todos los documentos que tienen el camp -->


## Update

<!-- One -->

<!-- $set: Actualiza el valor de un campo existente o agrega un nuevo campo: -->
- db.products.updateOne({ "_id": 1 }, { $set: { "price": 900 }})
<!-- En este ejemplo, se actualiza el precio del producto con ID 1 a 900. -->


<!-- $unset: Elimina un campo de un documento: -->
- db.products.updateOne({ "_id": 2 }, { $unset: { "brand": "" }})
<!-- En este ejemplo, se elimina el campo "brand" del producto con ID 2. -->


<!-- $inc: Incrementa el valor de un campo numérico: -->
- db.products.updateOne({ "_id": 3 }, { $inc: { "price": 100 }})
<!-- En este ejemplo, se incrementa el precio del producto con ID 3 en 100. -->


<!-- $rename: Cambia el nombre de un campo: -->
- db.products.updateOne({ "_id": 4 }, { $rename: { "price": "cost" }})
<!-- En este ejemplo, se cambia el nombre del campo "price" a "cost" en el producto con ID 4. -->

<!-- $mul: Multiplica el valor de un campo numérico por un número específico: -->
- db.products.updateOne({ "_id": 5 }, { $mul: { "price": 1.2 }})
<!-- En este ejemplo, se multiplica el precio del producto con ID 5 por 1.2. -->

<!-- $min: Actualiza el valor de un campo si el nuevo valor es menor que el valor actual: -->
- db.products.updateOne({ "_id": 1 }, { $min: { "price": 800 }})
<!-- En este ejemplo, el precio del producto con ID 1 no cambiará, ya que el valor actual es igual al valor mínimo especificado. -->

<!-- $max: Actualiza el valor de un campo si el nuevo valor es mayor que el valor actual: -->
- db.products.updateOne({ "_id": 2 }, { $max: { "price": 600 }})
<!-- En este ejemplo, el precio del producto con ID 2 se actualizará a 600, ya que es mayor que el valor actual. -->

<!-- Many -->
<!-- $set: Actualiza el valor de un campo específico. Ejemplo: -->
- db.products.updateMany(
   { "brand": "Apple" },
   { $set: { "price": 900 } }
)

<!-- $unset: Elimina un campo específico. Ejemplo: -->
- db.products.updateMany(
   { "brand": "Apple" },
   { $unset: { "brand": "" } }
)

<!-- $inc: Incrementa el valor de un campo numérico. Ejemplo: -->
- db.products.updateMany(
   { "brand": "Apple" },
   { $inc: { "price": 100 } }
)

<!-- $min: Actualiza el valor de un campo con el mínimo valor proporcionado. Ejemplo: -->
- db.products.updateMany(
   { "brand": "Apple" },
   { $min: { "price": 500 } }
)

<!-- $max: Actualiza el valor de un campo con el máximo valor proporcionado. Ejemplo: -->
- db.products.updateMany(
   { "brand": "Apple" },
   { $max: { "price": 1000 } }
)

<!-- $mul: Multiplica el valor de un campo por un número proporcionado. Ejemplo: -->
- db.products.updateMany(
   { "brand": "Apple" },
   { $mul: { "price": 1.2 } }
)

<!-- $rename: Renombra un campo. Ejemplo: -->
- db.products.updateMany(
   {},
   { $rename: { "brand": "manufacturer" } }
)

<!-- Es importante mencionar que los operadores de actualización solo modifican los documentos que cumplen con la condición especificada en el primer argumento de updateMany. Además, por defecto, updateMany solo actualiza un solo documento a la vez. Si se desea actualizar múltiples documentos, es necesario especificar el parámetro { multi: true }. -->


## Delete

<!-- db.collection.deleteOne({key:val}) 
db.collection.deleteMany({key:val}) -->

Ejemplo:

- db.products.deleteOne({"_id": 1})
<!-- : Elimina el producto con _id igual a 1. -->

- db.products.deleteOne({"brand": "Apple"})
<!-- : Elimina el primer producto que tenga "brand" igual a "Apple". -->

- db.products.deleteMany({"brand": "Apple"})
<!-- : Elimina todos los productos que tienen "brand" igual a "Apple". -->

- db.products.deleteMany({"price": {$lt: 500}})
<!-- : Elimina todos los productos que tienen "price" menor a 500. -->
