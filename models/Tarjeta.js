/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tarjeta', {
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fecha_vencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    codigo_seguridad: {
      type: DataTypes.INTEGER,
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
    tableName: 'Tarjeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero" },
        ]
      },
      {
        name: "usuario_tarjeta_fk",
        using: "BTREE",
        fields: [
          { name: "cedula" },
        ]
      },
    ]
  });
};
