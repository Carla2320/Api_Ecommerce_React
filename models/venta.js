/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('venta', {
    id_venta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_comprobante: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'cedula'
      }
    }
  }, {
    sequelize,
    tableName: 'venta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
      {
        name: "usuario_venta_fk",
        using: "BTREE",
        fields: [
          { name: "cedula" },
        ]
      },
    ]
  });
};
