const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const basePath = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // Poderiamso fazer uma letirua da tabela users e resgatar um usuario do banco. Faremos mais adiante
    // vamos so logar por enquanto

    console.log(`Estamos buscando pelo usuario: ${id}`);
    res.sendFile(`${basePath}/users.html`);

})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}´`);
})