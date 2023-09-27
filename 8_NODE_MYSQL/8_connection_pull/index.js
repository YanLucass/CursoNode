const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/conn.js');
const app = express();

// config handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// reqbody 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//css
app.use(express.static('public'));




app.post('/books/insertbook', (req, res) => {

    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    pool.query(sql, (err) => {
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
    pool.query(sql, (err, data) => {
       
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

    pool.query(sql, (err, data) => {

        if(err) {
            console.log(err);
            let ok = false;
            return;
        }

        
        const book = data[0];
        res.render('book', { book, ok});

    })
});


app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id;
    const sql = `SELECT * FROM books WHERE id= ${id}`
    
    pool.query(sql, (err, data) => {

        if(err) {
            console.log(err);
            return;
        }

        const book = data[0];
        console.log(book);
        res.render('editbook', { book });

    });
});

app.post('/books/updatebook', (req, res) => {
    
    const id = req.body.id;
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`;

    pool.query(sql, (err) => {

        if(err) {
            console.log(err);
            return;
        }

        res.redirect('/books');
    })
});


app.post('/books/remove/:id', (req, res) => {
    
    const id = req.params.id;

    const sql = `DELETE FROM books WHERE id = ${id}`

    pool.query(sql, (err) => {
        
        if(err) {
            console.log(err);
            return;
        }

        res.redirect('/books');

    })
})



app.get('/', (req, res) => {
    
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server está sendo executado na porta 3000');
});