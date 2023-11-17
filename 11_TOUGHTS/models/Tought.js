import { DataTypes } from 'sequelize'

//importar banco
import db from '../db/conn'
//models necessário
import User from './User';

const Tought = db.define('Tought', {
    title: {
      type: DataTypes.STRING,
      required: true  
    },
});

// Relação 1, N
Tought.belongsTo(User);
User.hasMany(Tought);

module.exports = Tought;