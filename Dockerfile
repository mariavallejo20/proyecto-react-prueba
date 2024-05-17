# Usa la imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia todos los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000 para que se pueda acceder al servidor desde fuera del contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación de React en modo de desarrollo
CMD ["npm", "start"]
