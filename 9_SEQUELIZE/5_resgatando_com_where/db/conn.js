const { Sequelize } = require('sequelize');

// instanciar
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;