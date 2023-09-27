const express = require('express');
const app = express();

const port = 3000;
const path = require('path');

const basePath = path.join(__dirname, 'templates') // unindo diretorio atual com templates. Agora podemos mandar o html

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`) // acesse o que quiser de templates, sej ao arquivo direto ou pasta q ele tá
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})