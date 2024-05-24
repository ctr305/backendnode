'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    static associate(models) {
      categoria.belongsToMany(models.pelicula, {
        through: 'categoriapelicula',
        foreignKey: 'categoriaid'
      });
    }
  }
  categoria.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    protegida: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'categoria',
    modelName: 'categoria',
  });
  return categoria;
};