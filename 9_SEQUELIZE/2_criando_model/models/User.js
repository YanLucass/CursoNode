const { DataTypes } = require('sequelize'); // dá acesso a todos tipos de dados que temos no banco. O para q o sequilize possa usar


const db = require('../db/conn.js');

// conectar o db com
const User = db.define('User', {
   
    // definir colunas
    name: {
        type: DataTypes.STRING,
        allowNull: false // not null, não aceita NULL
    },

    occupation: {
        type: DataTypes.STRING,
        required: true,      //n aceita nem null nem nada vazio, ou seja, melhor
    },

    // accept do usuario, queremos saber se ele aceitou ou não. 1 ou 0
    newsletter: {
        type: DataTypes.BOOLEAN
    },

})

module.exports = User;