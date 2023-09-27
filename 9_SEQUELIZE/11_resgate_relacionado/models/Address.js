const { DataTypes } = require('sequelize');

const db = require('../db/conn');

// Model para fazer relação

const User = require('./User');

const Address = db.define('Address', {

    // rua
    street: {
        type: DataTypes.STRING,
        required: true,
    },

    number: {
        type: DataTypes.STRING,
        required: true,
    },

    city: {
        type: DataTypes.STRING,
        required: true,
    },

});

User.hasMany(Address); // um usuario tem vários endereços
Address.belongsTo(User); // Mas um endereço pertence a um usuario relação 1, 1 Dizneod que quermeos uma coluna user id, que contenha o id do usuario

module.exports = Address;
