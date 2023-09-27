const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

// configurar corpo da requisição

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// configurar handlebars

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//definir css
app.use(express.static('public'));


// configurar conexão
const conn = mysql.createConnection({
    
});

// conectando
conn.connect((err) => {
    if(err) console.log('Deu erro');
    app.listen(3000, () => {
        console.log('MySql rodando!');
    })
})


app.get('/books', (req, res) => {

    const sql = `SELECT * FROM books`;
    // executar query.
    conn.query(sql, function(err, data){
        
        if(err) {
            console.log(err);
            return;
        }

        const books = data;
        res.render('books', { books });
    });
    
});


app.post('/books/insertbook', (req, res) => {

    // pegando dados do corpo da requisção
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, (err) => {
        console.log(err);
        return;
    });

    res.redirect('/books');
});

app.get('/', (req, res) => {

    res.render('home');
})

