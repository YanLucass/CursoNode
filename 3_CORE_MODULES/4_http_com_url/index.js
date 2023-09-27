const http = require('http');

const port = 3000;

server = http.createServer((req, res) => {

    // saber que url ta chegando
    const urlInfo = require('url').parse(req.url, true) // qnd a requisição chegar, vamos parsear/desmontar a url que vem por ela
   
    const name = urlInfo.query.name; //Pegando a url decomposta, no query parametros o nome
    
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');

    // se n tem nome
    if(!name) {
        res.end('<h1> Preencha seu nome </h1> <form method="GET"> <input type="text" name="name"> <input type="submit" value="enviar"> </form>')
    } else {
        res.end(`<h1> Seja bem vindo ${name} </h1>`)
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

