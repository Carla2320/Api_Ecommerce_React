/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Compra', {
    id_compra: {
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
    },
    id_detalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Detalle_venta',
        key: 'id_detalle'
      }
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tarjeta',
        key: 'numero'
      }
    }
  }, {
    sequelize,
    tableName: 'Compra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compra" },
        ]
      },
      {
        name: "detalle_venta_venta_fk",
        using: "BTREE",
        fields: [
          { name: "id_detalle" },
        ]
      },
      {
        name: "usuario_venta_fk",
        using: "BTREE",
        fields: [
          { name: "cedula" },
        ]
      },
      {
        name: "tarjeta_venta_fk",
        using: "BTREE",
        fields: [
          { name: "numero" },
        ]
      },
    ]
  });
};
