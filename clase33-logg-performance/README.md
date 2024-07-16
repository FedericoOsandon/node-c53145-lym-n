express 
express-handlebars
multer
socket.io

- nvm
1-mirar la versión de node
2-desintalar node
3-descargar nvm https://github.com/coreybutler/nvm-windows/releases
4-instalar nvm
4-bis cerrar terminal, cmd, pws, etc... y volver abrir
5-nvm -v o nvm --version
6- nvm install 20.15.1c
7-nvm use 20.15.1


# Artillery 

artillery quick --count 40 --num 50 "http://localhost:8080/pruebas/simple" -o simple.json
artillery quick --count 40 --num 50 "http://localhost:8080/pruebas/compleja" -o compleja.json

artillery run config.yml --output testPerformace.json
artillery report testPerformace.json -o testResults.html