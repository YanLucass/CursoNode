const express = require('express');
const exphbs = require('express-handlebars');
const app = express();


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/dashboard', (req, res) => {
    
    const items = ['uva', 'banana', 'maça'];

    res.render('dashboard', {items});
});

app.get('/post', (req, res) => {
    
    // é um objeto complexo, o with é útil. Claro que teria muito mais propriedade, é so um exemplo.
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Esse artigo te ajuda a aprender Node.js....',
        comments: 4
    };

    res.render('blogpost', {post})

});

app.get('/', (req, res) => {


    const auth = true;
    const approved = true;
    res.render('home', {auth, approved})
});


app.listen(3000, ()=> {
    console.log('App rondando');
});