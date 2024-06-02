const Sequelize = require('sequelize');
const env = 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'mysql',
  host: config.host
});

module.exports = sequelize;