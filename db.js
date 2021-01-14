const Sequelize = require("sequelize");

const userModel = require("./models/usuario");
const userModel1 = require("./models/Producto");
const sesionModel = require("./models/sesion");

const sequelize = new Sequelize("32AQQtdd59", "32AQQtdd59", "04EPivu5BU", {
  host: "remotemysql.com",
  dialect: "mysql",
});

const sequelizeData = new Sequelize("y2waiC529E", "y2waiC529E", "U2ckMYvZ7N", {
  host: "remotemysql.com",
  dialect: "mysql",
});

const User = userModel(sequelize, Sequelize);
const Product = userModel1(sequelize, Sequelize);
const Sesion = sesionModel(sequelizeData, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("tablas sincronizadas");
});

sequelizeData.sync({ force: false }).then(() => {
  console.log("tablas 2 sincronizadas");
});

module.exports = {
  User,
  Product,
  Sesion,
};
