const express = require('express');
const exphbs = require('express-handlebars');
const connS = require('./db/conn');
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

app.listen(3000, () => {
    console.log('Server está sendo executado na porta 3000');
});