var DataTypes = require("sequelize").DataTypes;
var _sesion = require("./sesion");

function initModels(sequelize) {
  var sesion = _sesion(sequelize, DataTypes);


  return {
    sesion,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
