const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json()); // Todo corpo da requisição é transformado em um objeto js que conseguimos ler, atraves de req.body


const basePath = path.join(__dirname, 'templates');


app.get('/users/create', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})


app.post('/users/save', (req, res) => {
// tratar os dados que vai vir do post. Receber por post dá acesso ao req body. Temos que configurar ele
// usamos dois middlewares lá em cima para configurar
console.log(req.body)

// a partir daqui poderiamos salvar esses dados no BD, se eu soubesse. No caso vms fazer algo so pra ver msm
    
    const name = req.name;
    const age = req.age;
    console.log(`o nome do usuario é ${name} e sua idade é ${age}`);

    // so pra dar um fim a requisição
    res.sendFile(`${basePath}/userform.html`)
})


app.get('/users/:id', (req, res) => {

    // pegando parametro id
    const id = req.params.id;

    // Exemplo de utilização do ID: Poderiamos fazer leitura users, e resgatar um usuario do banco.(Aplicações reais)
    // Então vamos so imprirmir alguma coisa

    console.log(`Estamos buscando pelo o usuario ${id}`);
    res.sendFile(`${basePath}/users.html`)
})


app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, () => {
console.log(`A aplicação está rodando em ${port}`);
})


