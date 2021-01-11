var DataTypes = require("sequelize").DataTypes;
var _Categoria = require("./Categoria");
var _Compra = require("./Compra");
var _Detalle_venta = require("./Detalle_venta");
var _Producto = require("./Producto");
var _Rol = require("./Rol");
var _Tarjeta = require("./Tarjeta");
var _Usuario = require("./Usuario");

function initModels(sequelize) {
  var Categoria = _Categoria(sequelize, DataTypes);
  var Compra = _Compra(sequelize, DataTypes);
  var Detalle_venta = _Detalle_venta(sequelize, DataTypes);
  var Producto = _Producto(sequelize, DataTypes);
  var Rol = _Rol(sequelize, DataTypes);
  var Tarjeta = _Tarjeta(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Compra.belongsTo(Usuario, { foreignKey: "cedula"});
  Usuario.hasMany(Compra, { foreignKey: "cedula"});
  Compra.belongsTo(Detalle_venta, { foreignKey: "id_detalle"});
  Detalle_venta.hasMany(Compra, { foreignKey: "id_detalle"});
  Compra.belongsTo(Tarjeta, { foreignKey: "numero"});
  Tarjeta.hasMany(Compra, { foreignKey: "numero"});
  Detalle_venta.belongsTo(Producto, { foreignKey: "id_producto"});
  Producto.hasMany(Detalle_venta, { foreignKey: "id_producto"});
  Producto.belongsTo(Categoria, { foreignKey: "id_categoria"});
  Categoria.hasMany(Producto, { foreignKey: "id_categoria"});
  Tarjeta.belongsTo(Usuario, { foreignKey: "cedula"});
  Usuario.hasMany(Tarjeta, { foreignKey: "cedula"});
  Usuario.belongsTo(Rol, { foreignKey: "id_rol"});
  Rol.hasMany(Usuario, { foreignKey: "id_rol"});

  return {
    Categoria,
    Compra,
    Detalle_venta,
    Producto,
    Rol,
    Tarjeta,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
