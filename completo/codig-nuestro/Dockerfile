# primero definimos la imagen base
FROM node:16.13.0

# Después creamos una carpeta interna donde vamoa a guardar nuestro proyecto (usualmente se llama app)
WORKDIR /app

# Con esto, copiamos el package.json de nuestra carpeta actual, a la carpeta dockeroperations
# COPY package.json /app

# Después de la instalación, podemos tomar todo el código del aplicativo. 
COPY . .

# Una ves copiado el package.json, podemos ejecutar un npm install interno en esa carpeta
RUN npm install


# Exponemos un puerto para que este escuche a partir de un puerto de nuestra computadora. 
EXPOSE 8080

#Una vez realizado, se debera ejecutar "npm start" para iniciar la aplicación (ten listo el comando en tu package.json)
CMD ["node", "src/app.js"]