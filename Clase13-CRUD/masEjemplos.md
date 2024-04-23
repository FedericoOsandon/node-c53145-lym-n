// comandos mongo

// show dbs
// use nombre_db
// show collections
// db.nombre_collection.find()
// db.nombre_collection.find().pretty()
// db.nombre_collection.insert({nombre: "nombre", apellido: "apellido"})
// db.nombre_collection.update({nombre: "nombre"}, {nombre: "nombre", apellido: "apellido"})
// db.nombre_collection.remove({nombre: "nombre"})
// db.nombre_collection.drop()


// db.coll.drop()
// db.dropDatabase()

// create collection
// db.createCollection("nombre_collection")

// create index
// db.nombre_collection.createIndex({nombre: 1})

// db.coll.stats()
// db.coll.storageSize()
// db.coll.totalIndexSize()
// db.coll.totalSize()
// db.coll.validate({full: true})
// db.coll.renameCollection("nombre_collection", true)

// comands create (insert)
// db.nombre_collection.insertOne({nombre: "nombre", apellido: "apellido"})
// db.nombre_collection.insert([{nombre: "nombre", apellido: "apellido"}, {nombre: "nombre", apellido: "apellido"}])
// db.nombre_collection.insert([{nombre: "nombre", apellido: "apellido"}, {nombre: "nombre", apellido: "apellido"}], {ordered: false})
// db.nombre_collection.insert({ date: ISODate() }) 
// db.nombre_collection.insert({name: "Max"}, {writeConcern: {w: "majority", wtimeout: 5000}})

// db.nombre_collection.insertMany([{nombre: "nombre", apellido: "apellido"}, {nombre: "nombre", apellido: "apellido"}])

// comands read (find)
// db.nombre_collection.findOne()
// db.nombre_collection.find()
// db.nombre_collection.find().pretty()
// db.nombre_collection.find({nombre: "nombre"})
// db.nombre_collection.find({nombre: "nombre"}, {nombre: 1, apellido: 1})
// db.nombre_collection.find({date: ISODate("2019-01-01t00:00:00.000z")})

// comandos contadores
// db.nombre_collection.estimateDocumentCount()
// db.nombre_collection.countDocuments({nombre: "nombre"})

// read con filtros
// db.nombre_collection.find({year: {$gt: 2010}})
// db.nombre_collection.find({year: {$gte: 2010}})
// db.nombre_collection.find({year: {$lt: 2010}})
// db.nombre_collection.find({year: {$lte: 2010}})
// db.nombre_collection.find({year: {$ne: 2010}})
// db.nombre_collection.find({year: {$in: [2010, 2011, 2012]}})
// db.nombre_collection.find({year: {$nin: [2010, 2011, 2012]}})
// db.nombre_collection.find({year: {$exists: true}})
// db.nombre_collection.find({year: {$type: "string"}})
// db.nombre_collection.find({year: {$mod: [4, 0]}})
// db.nombre_collection.find({year: {$regex: /201/}})
// db.nombre_collection.find({year: {$regex: /201/, $options: "i"}})

// read con filtros combinados
// db.nombre_collection.find({year: {$gt: 2010}, year: {$lt: 2015}})
// db.nombre_collection.find({$or: [{year: {$gt: 2010}}, {year: {$lt: 2015}}]})
 db.estudiantes.find({
    $and: [
        {$or: [{edad: {$gt: 15}}, {edad: {$lt: 16}}]},
        {$or: [{edad: {$gt: 18}}, {edad: {$lt: 20}}]}
    ]})
 db.estudiantes.find({ $or: [ {edad: {$gt: 15}}, {edad: {$lt: 16}} ] })
 db.estudiantes.find({ $and: [ {edad: {$gt: 15}}, {edad: {$lt: 18}} ] })
    
// db.nombre_collection.find({$nor: [{year: {$gt: 2010}}, {sales: true}]})

// busqueda avanzada
// db.nombre_collection.distinct("year") // devuelve un array con los valores distintos de la propiedad year
// db.nombre_collection.find({year: {$gt: 2010}})

//Comando Read con filtros avanzados y proyección

// db.nombre_collection.find({year: {$gt: 2010}}, {year: 1, _id: 0})


// update
// db.nombre_collection.update({nombre: "nombre"}, {nombre: "nombre", apellido: "apellido"})
// db.nombre_collection.update({nombre: "nombre"}, {$set: {nombre: "nombre", apellido: "apellido"}})
// db.nombre_collection.update({nombre: "nombre"}, {$set: {nombre: "nombre", apellido: "apellido"}}, {upsert: true})
// db.nombre_collection.update({nombre: "nombre"}, {$set: {nombre: "nombre", apellido: "apellido"}}, {multi: true})
// db.nombre_collection.update({nombre: "nombre"}, {$set: {nombre: "nombre", apellido: "apellido"}}, {upsert: true, multi: true})

// db.nombre_collection.updateOne({nombre: "nombre"}, {$set: {nombre: "nombre", apellido: "apellido"}})
// db.nombre_collection.updateMany({nombre: "nombre"}, {$set: {nombre: "nombre", apellido: "apellido"}})

// db.nombre_collection.replaceOne({nombre: "nombre"}, {nombre: "nombre", apellido: "apellido"})
// db.nombre_collection.replaceOne({nombre: "nombre"}, {nombre: "nombre", apellido: "apellido"}, {upsert: true})

// delete
// db.nombre_collection.remove({nombre: "nombre"})
// db.nombre_collection.remove({nombre: "nombre"}, {justOne: true})

// db.nombre_collection.deleteOne({nombre: "nombre"})
// db.nombre_collection.deleteMany({nombre: "nombre"})
// db.nombre_collection.drop()

// db.nombre_collection.find().sort({year: 1})
// db.nombre_collection.find().sort({year: -1})
// db.nombre_collection.find().sort({year: 1, sales: -1})

// db.nombre_collection.find().limit(2)
// db.nombre_collection.find().skip(2)

// db.nombre_collection.find().limit(2).skip(2)

// db.nombre_collection.find().limit(2).skip(2).sort({year: 1})

// db.nombre_collection.find().limit(2).skip(2).sort({year: 1}).count()


// db.nombre_collection.find().limit(2).skip(2).sort({year: 1}).count()


