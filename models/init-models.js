var DataTypes = require("sequelize").DataTypes;
var _Categoria = require("./Categoria");
var _Detalle_venta = require("./Detalle_venta");
var _Producto = require("./Producto");
var _Rol = require("./Rol");
var _Usuario = require("./Usuario");
var _Usuarios = require("./Usuarios");
var _venta = require("./venta");

function initModels(sequelize) {
  var Categoria = _Categoria(sequelize, DataTypes);
  var Detalle_venta = _Detalle_venta(sequelize, DataTypes);
  var Producto = _Producto(sequelize, DataTypes);
  var Rol = _Rol(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);
  var Usuarios = _Usuarios(sequelize, DataTypes);
  var venta = _venta(sequelize, DataTypes);

  Detalle_venta.belongsTo(venta, { foreignKey: "id_venta"});
  venta.hasMany(Detalle_venta, { foreignKey: "id_venta"});
  Detalle_venta.belongsTo(Producto, { foreignKey: "id_producto"});
  Producto.hasMany(Detalle_venta, { foreignKey: "id_producto"});
  Producto.belongsTo(Categoria, { foreignKey: "id_categoria"});
  Categoria.hasMany(Producto, { foreignKey: "id_categoria"});
  Usuario.belongsTo(Rol, { foreignKey: "id_rol"});
  Rol.hasMany(Usuario, { foreignKey: "id_rol"});
  venta.belongsTo(Usuario, { foreignKey: "cedula"});
  Usuario.hasMany(venta, { foreignKey: "cedula"});

  return {
    Categoria,
    Detalle_venta,
    Producto,
    Rol,
    Usuario,
    Usuarios,
    venta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
