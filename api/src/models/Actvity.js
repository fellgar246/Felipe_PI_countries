const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM(
           "Cultural", 
           "Religious", 
           "Gastronomic", 
           "Idiomatic", 
           "Health", 
           "Sports", 
           "Theme park", 
           "Business"
       ),
       allowNull: false,
   },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    duration: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
            max: 24
        }
    },
    season: {
        type: DataTypes.ENUM(
            "Summer", 
            "Autumn",
            "Winter", 
            "Spring"
        ),
        allowNull: false,
    },
  },
  {
    timestamps: false
  }
  );
};