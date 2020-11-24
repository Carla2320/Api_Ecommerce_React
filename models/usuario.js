/* jshint indent: 2 */
const sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rol',
        key: 'id_rol'
      }
    },
    nombre_usuario: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    apellido_usuario: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    contrasenia_usuario: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    operacion:{
      type:DataTypes.STRING(40),
      allowNull: false
    },
    multiplo:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cedula" },
        ]
      },
      {
        name: "rol_usuario_fk",
        using: "BTREE",
        fields: [
          { name: "id_rol" },
        ]
      },
    ]
  });
};
