const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        //TODO: verificar LEN
        len: [1,3]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageFlag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      //TODO Revisar si es Enum
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false
  });
};
