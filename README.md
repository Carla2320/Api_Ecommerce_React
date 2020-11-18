# ecommerceApi
en el archivo db de este proyecto deben ingresar las crdenciales de la base de datos que vayan a usar que van en este orden (username, database, password)

concretamente en esta porcion del codigo 
el host tendran que cambiarlo si estan usando una base de datos local

const sequelize = new Sequelize('32AQQtdd59', '32AQQtdd59', '04EPivu5BU', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});




http://localhost:3000/api/user
con esta ruta se obtienen los datos de la tabla usuario en la base de datos con el metodo get
con ela misma ruta se insertan usuarios en la bd on el metodo post

existe una carpeta models en la que se encuentran las tablas de la bd y de esta forma manejarla como objetos
