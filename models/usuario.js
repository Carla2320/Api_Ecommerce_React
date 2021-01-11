/* jshint indent: 2 */

const Sequelize = require('sequelize');
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
    genero_usuario: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    contrasenia_usuario: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    celular_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    telefono_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    direccion_principal: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    direccion_secundaria: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    codigo_postal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    operacion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    multiplo: {
      type: DataTypes.INTEGER,
      allowNull: false
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
