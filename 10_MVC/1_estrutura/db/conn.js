import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql'
});


try {
    sequelize.authenticate();
    console.log('Conectado ao MYSQl');

} catch(err) {
    console.log(`deu erro ${err}`);
}


exports.default = sequelize;