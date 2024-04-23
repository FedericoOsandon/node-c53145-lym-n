
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
// db.nombre_collection.find({
    // $and: [
        // {$or: [{year: {$gt: 2010}}, {year: {$lt: 2015}}]},
        // {$or: [{year: {$gt: 2010}}, {year: {$lt: 2015}}]}
    // ]})
// db.nombre_collection.find({$nor: [{year: {$gt: 2010}}, {sales: true}]})

// busqueda avanzada
// db.nombre_collection.distinct("year") // devuelve un array con los valores distintos de la propiedad year
// db.nombre_collection.find({year: {$gt: 2010}})

//Comando Read con filtros avanzados y proyección

// db.nombre_collection.find({year: {$gt: 2010}}, {year: 1, _id: 0})