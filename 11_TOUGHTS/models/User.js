import { DataTypes } from "sequelize";
//banco
import db from '../db/conn';


const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        //require?
        required: true,
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true,
    },
});


module.exports = User;