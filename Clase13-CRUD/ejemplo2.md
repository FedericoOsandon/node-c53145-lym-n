Basado en nuestra base de datos “colegio”
Se agregarán 5 estudiantes más, con diferentes campos y con la misma estructura. además, crear 1 alumno sólo con nombre.
Realizar una búsqueda aplicando ordenamientos, proyecciones, saltos y límites.
Se analizarán los resultados de las proyecciones, saltos, ordenamientos y límites. ¿Cómo se comportan los documentos que tienen campos incompletos?

- db.estudiantes.insertMany([
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 16,
    "matemáticas": 85,
    "historia": 80,
    "inglés": 90
  },
  {
    "nombre": "María",
    "apellido": "Rodríguez",
    "edad": 15,
    "matemáticas": 90,
    "historia": 95,
    "inglés": 85
  },
  {
    "nombre": "Pedro",
    "apellido": "Sánchez",
    "edad": 17,
    "matemáticas": 80,
    "historia": 90,
    "inglés": 95
  },
  {
    "nombre": "Sofía",
    "apellido": "García",
    "edad": 16,
    "matemáticas": 95,
    "historia": 80,
    "inglés": 85
  },
  {
    "nombre": "Miguel",
    "apellido": "Martínez",
    "edad": 18,
    "matemáticas": 85,
    "historia": 95,
    "inglés": 90
  }
]);

db.colegio.insert({
  "nombre": "Daniel"
});


<!-- // Búsqueda con ordenamiento -->
db.colegio.find().sort({edad: 1});

<!-- // Búsqueda con proyección -->
db.colegio.find({}, {nombre: 1, apellido: 1, _id: 0});

<!-- // Búsqueda con saltos -->
db.colegio.find().skip(3).limit(3);

<!-- // Búsqueda con límites -->
db.colegio.find().limit(3);

En cuanto a los documentos con campos incompletos, cuando se realizan proyecciones, solo se mostrarán los campos especificados en la proyección. Por ejemplo, en la búsqueda con proyección anterior, el documento con solo el nombre "Daniel" solo tendrá el campo "nombre". Sin embargo, en el ordenamiento, los documentos con campos incompletos se tratarán como si tuvieran el valor null para esos campos, lo que puede afectar el resultado de la búsqueda.