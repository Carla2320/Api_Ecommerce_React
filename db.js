const Sequelize = require('sequelize');

const userModel = require('./models/usuario');

const sequelize = new Sequelize('32AQQtdd59', '32AQQtdd59', '04EPivu5BU', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const User = userModel(sequelize,Sequelize);

sequelize.sync({ force: false })
.then(()=>{
    console.log('tablas sincronizadas');
});

module.exports = {
    User
}