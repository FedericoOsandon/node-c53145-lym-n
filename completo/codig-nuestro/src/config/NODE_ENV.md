- En linux terminal:
NODE_ENV=production node app.js

- En Windows terminal: 
set NODE_ENV=production && node app.js

- En .env:
NODE_ENV=production
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=pass123

- En node(Esta anula todas las anteriores):
// app.js

const express = require('express');
const app = express();

// establecer NODE_ENV en production
process.env.NODE_ENV = 'production'

en 
