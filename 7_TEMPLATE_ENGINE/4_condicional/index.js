const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');



// renderizar pagina dashboard

app.get('/dashboard', (req, res) => {

    res.render('dashboard');

})

app.get('/', (req, res) => {
       
    const user = {
        name: 'Yan',
        surName: 'Carvalho',
        age: '30'
    };

    const palava = 'Envie objetos variaveis, etc'

    //verificar se o usuario está logado ou não (auth). teriamos toda uma lógica para isso, verificando asection do user etc.
    // a nivel de exempplo a autenticação retornou true

    const auth = false;
    res.render('home', {user: user, palava, auth})

})


app.listen(5000, ()=> {
    console.log('Server rodando');
})