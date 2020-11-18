/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Detalle_venta', {
    id_detalle: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'venta',
        key: 'id_venta'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Producto',
        key: 'id_producto'
      }
    }
  }, {
    sequelize,
    tableName: 'Detalle_venta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detalle" },
        ]
      },
      {
        name: "producto_detalle_venta_fk",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "venta_detalle_venta_fk",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
    ]
  });
};
