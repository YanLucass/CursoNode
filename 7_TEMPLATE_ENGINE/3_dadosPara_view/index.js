const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {

    // ususario que poderia ter vindo do bd
    const user = {
        name: 'Yan',
        surName: 'Carvalho', 
        age: '30'
    };

    const palavraVariavel = 'Não precisa enviar só objetos';

    // especificando chave e valor
    res.render('home', {user: user, palavraVariavel})  // agora permitirá o acesso ao user no front-end.
})

app.listen(3000, () => {
    console.log(`Server rodando na prota ${3000}`)
})