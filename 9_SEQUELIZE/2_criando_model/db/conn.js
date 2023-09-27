//  Exportar obj sequelize

const { Sequelize } = require('sequelize');

// Passando dados para o construtor.

const sequelize = new Sequelize('', '', '', {
    host: 'localhost',
    dialect: 'mysql'    // é qual banco queremos integrar. 
    
});



/*
try {

    sequelize.authenticate(); // método para conectar
    console.log('Conectamos ocm sucesso com o sequelize');

} catch(err) {
    console.log(`Não foi possível conectar ${err}`)
}

*/

module.exports = sequelize; 