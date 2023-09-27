const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();

// config handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// reqbody 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//css
app.use(express.static('public'));

// conexão BD

const conn = mysql.createConnection({
   
});

conn.connect((err) => {
    if(err) console.log(err);
    console.log('Conectado ao MySqL!');
    app.listen(3000);
});


app.post('/books/insertbook', (req, res) => {

    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, (err) => {
        if(err) {
            console.log(err);
            return;
        }

        res.redirect('/books')
    })
});


// Rotas todos os livros
app.get('/books', (req, res) => {

    const sql = `SELECT * FROM books`;
    conn.query(sql, (err, data) => {
       
        if(err) {
            console.log(err);
            return;
        }

        const books = data;
        res.render('books', { books });
    });
   


});


// Rota livro individual.
app.get('/books/:id', (req, res) => {
    
    const id = req.params.id;
    const sql = `SELECT * FROM books WHERE id = ${id}`;
    let ok = true;

    conn.query(sql, (err, data) => {

        if(err) {
            console.log(err);
             ok = false;
            return;
        }

        
        const book = data[0];
        res.render('book', { book, ok});

    })
});


app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id;
    const sql = `SELECT * FROM books WHERE id= ${id}`
    
    conn.query(sql, (err, data) => {

        if(err) {
            console.log(err);
            return;
        }

        const book = data[0];
        console.log(book);
        res.render('editbook', { book });

    });
});
app.get('/', (req, res) => {
    
    res.render('home');
});