'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    static associate(models) {
      pelicula.belongsToMany(models.categoria, {
        as: 'categoria',
        through: 'categoriapelicula',
        foreignKey: 'peliculaid'
      })
    }
  }

  pelicula.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      defaultValue: 'Sin título'
    },
    sinopsis: {
      type: DataTypes.STRING,
      defaultValue: 'Sin sinopsis'
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      defaultValue: 'https://via.placeholder.com/300x450'
    }
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'pelicula',
    modelName: 'pelicula',
  });
  
  return pelicula;
};