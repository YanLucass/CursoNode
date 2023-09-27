const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// nome para as rotas, nesse caso faz sentido usersRoutes
const usersRoutes = require('./users') // O node entende se o arquivo dentro se chamar "index.js"

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json()); // Todo corpo da requisição é transformado em um objeto js que conseguimos ler, atraves de req.body

// arquivos estaticos

app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.use('/users', usersRoutes)  // middleware responsavel pelas rotas(users). Um de roteamento

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);
})

// fim das alternativas

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`) // muda resposta da rq pra 404 e manda pagina
    // next n é necessario pois é a ultima pagina ne.
    

})
app.listen(port, () => {
console.log(`A aplicação está rodando em ${port}`);
})


