const express = require('express');
const exphbs = require('express-handlebars');
const connS = require('./db/conn');

// aqui colocamos a tabela a ser criada. So de ter ele aqui ele entende e mapeia essa tabela
const User = require('./models/User');
const app = express();

// config handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// reqbody 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//css
app.use(express.static('public'));

app.get('/', (req, res) => {
    
    res.render('home');
});


// cria tabela qnd precisarmos. Não deixamos a aplicação funcionar sem as tabelas necessarias
connS.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    })