// router

const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');


router.get('/create', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})


router.post('/save', (req, res) => {
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


router.get('/:id', (req, res) => {

    // pegando parametro id
    const id = req.params.id;

    // Exemplo de utilização do ID: Poderiamos fazer leitura users, e resgatar um usuario do banco.(Aplicações reais)
    // Então vamos so imprirmir alguma coisa

    console.log(`Estamos buscando pelo o usuario ${id}`);
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router

// exportando o router, independentne da entidade ser users, produtos etc