const { DataTypes } = require('sequelize');

const db = require('../db/conn');

// definir classe
const User = db.define('User', {
    // columns

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
    }
});

module.exports = User;