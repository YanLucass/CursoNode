const { DataTypes } = require('sequelize');

// importar obj para o banco
const db = require('../db/conn');

// definir model/ classe

const User = db.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    occupation: {
        type: DataTypes.STRING,
        required: true
    },

    newsletter: {
        type: DataTypes.BOOLEAN
    },
});


module.exports = User;