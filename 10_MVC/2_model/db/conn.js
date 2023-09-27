const Sequelize = require('sequelize');

const sequelize = new Sequelize( {
    host: 'localhost',
    dialect: 'mysql'
});

// Usando async/await para autenticar a conexão
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao MySQL');
    } catch (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    }
})();

module.exports = sequelize;
