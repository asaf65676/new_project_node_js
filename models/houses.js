const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const Houses = sequelize.define('Houses', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true, 
    primaryKey: true  // unique + index
  },
  city: {
    type: DataTypes.STRING
  },
  area: {
    type: DataTypes.STRING
  },
  street: {
    type: DataTypes.STRING
  },
  bildingNumber: {
    type: DataTypes.INTEGER
  },
  rooms: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.DOUBLE
  },
}, {

});
// One to Many
// Category.hasMany(CategoryImage, {
//   foreignKey: 'categoryId'
// })

module.exports = Houses;