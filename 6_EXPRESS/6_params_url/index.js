const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname, 'templates');

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
    console.log(' A aplicação está rodando em 3000');
})