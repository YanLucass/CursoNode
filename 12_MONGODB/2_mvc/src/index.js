import express from 'express';
const exphbs = require('express-handlebars');
import conn from '../db/conn.js'

const app = express();

//static files
app.use(express.static('public'));

//routes import
import productsRoutes from '../routes/productsRoutes.js';

//setting handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//read body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes definition
app.use('/products', productsRoutes);

app.listen(3000);
