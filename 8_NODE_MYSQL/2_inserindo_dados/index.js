const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql')
const app = express();

// configurar para pegar body

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json()); // pegar body em json



// configurar handle
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));


const conn = mysql.createConnection({
   
});


conn.connect((err) => {
    if(err) console.log(err);

    console.log('Conectado ao MySQL!');
    app.listen(3000);
})


// pegar dados do corpo da requisisçaõ

app.post('/books/insertbook', (req, res) => {


    const title = req.body.title; // pegando titulo do corpo da req
    const pageqty = req.body.pageqty;

  

    //fazer query instrução

    const sqlComand = `INSERT INTO books (title, pageqty) VALUES  ('${title}', '${pageqty}')`

    //enviar instrução com o método query q lida com querys.
    conn.query(sqlComand, function(err) {

        if(err) console.log(err);
        // caso n tenha erro redirecione para home

        res.redirect('/');
    });
})

app.get('/', (req, res) => {

    res.render('home')
});



