const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname, 'templates');

// checar login. Função que é um middleware
const checkAuth = function(req, res, next) {

    req.authStatus = false;

    if(req.authStatus) {
        console.log('O usuario está logado');
        next();
    } else {
        console.log('O usuario não está logado!');
        next();
    }
}

//  Middleware existe, agora vamos usar
app.use(checkAuth);

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, () => {
    console.log(' A aplicação está rodando em 3000');
})