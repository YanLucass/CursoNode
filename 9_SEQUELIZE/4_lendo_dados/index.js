const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const app = express();
const User = require('./models/User');


// configurar handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// req body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// arquivos estaticos
app.use(express.static('public'));



// GET CREATE USER

app.get('/users/create', (req, res) => {
    res.render('adduser');

});

app.post('/users/create', async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;  // se tiver marcado é "on"

    if(newsletter === 'on') {
        newsletter = true;
    }else {
        newsletter = false;
    }

    console.log(req.body);
    await User.create({name, occupation, newsletter});

    res.redirect('/');
})

//HOME
app.get('/', async (req, res) => {

    const users = await User.findAll({raw: true});

    console.log(users);

    res.render('home', { users: users});
});


conn.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server em execução');
        })
    })
    .catch(err => {
        console.log(err);
    })

