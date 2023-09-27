const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

// configurar engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
})



// criando conexão
const conn = mysql.createConnection({
   
});


// estabelecer conexão a cada iteração com a nossa aplicação

conn.connect((err) => {
    
    if(err) {
        console.log(err);
    }

    console.log('Conectou ao MySQL!');

    app.listen(3000);
})


