const Sequelize = require('sequelize');

const userModel = require('./models/usuario');

const sequelize = new Sequelize('login','root','', {
    host: 'localhost',
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