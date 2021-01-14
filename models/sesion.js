/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sesion', {
    token: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hora_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hora_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    transaccion: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    num_errores: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sesion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
};
