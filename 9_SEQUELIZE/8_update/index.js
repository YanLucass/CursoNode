const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const User = require('./models/User');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));




// EXIBIR PAGINA DE CRIAÇÃO

app.get('/users/create', (req, res) => {
    res.render('adduser');
 
});

//CRIAR USUARIO

app.post('/users/create', async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;
    
    if(newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }
    
    console.log(req.body);
    
    await User.create({name, occupation, newsletter});
    res.redirect('/');
});


// VIEW ONE

app.get('/users/:id', async (req, res) => {

    const id = req.params.id;
    const user = await User.findOne({raw: true, where: {id: id}});
    res.render('userview', { user });

});

// DELETAR USUARIO
app.post('/users/delete/:id', async (req, res) => {
    
    const id = req.params.id;
    await User.destroy({where: {id: id}});
    res.redirect('/');
})

app.get('/', async (req, res) => {
    
    const users = await User.findAll({raw: true});
    console.log(users);
    res.render('home', { users });

});

// EDITAR USUARIO

app.get('/users/edit/:id', async (req, res) => {

    const id = req.params.id;
    const user = await User.findOne({ raw: true, where: {id: id}});
    res.render('useredit', { user });
});

app.post('/user/update', async (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if(newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    // Colocar dados em um objeto UserData. Não precisa de chave e valor visto que tem o mesmo nome
   
    const userData = {
        id,
        name,
        occupation,
        newsletter
    }
    
    await User.update(userData, { where: { id: id } });
    res.redirect('/');

})


conn
    .sync()
    //.sync({force: true})
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })