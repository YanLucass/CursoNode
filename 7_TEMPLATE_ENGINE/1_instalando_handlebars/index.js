const express = require('express');
const exphbs = require('express-handlebars');

const app = express()


// Configurando o template para handlebars. 
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home', {layout: false}) // renderizar
})

app.listen(3000, () => {
    console.log('App funcionando!');
})