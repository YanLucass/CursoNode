const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('../db/conn').default;

const Task = require('../models/Task');


//importar rotas das tasks

const tasksRoutes = require('../routes/tasksRoutes');


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// corpo da requisição
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// arquivos estasticos 
app.use(express.static('public'));


//Todo /tasks pertecente as tasks routes. 

app.use('/tasks', tasksRoutes); // Adiciona /tasks as no começo das rotas de tasksRoutes. Ex: '/tasks/add

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err));