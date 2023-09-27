const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Address = db.define('Address', {

    city: {
        type: DataTypes.STRING,
        required: true,
    },

    street: {
        type: DataTypes.STRING,
        required: true,
    },

    number: {
        type: DataTypes.STRING,
        required: true,
    },
});

// relacionamentos

User.hasMany(Address); // N
Address.belongsTo(User); //1


module.exports = Address;