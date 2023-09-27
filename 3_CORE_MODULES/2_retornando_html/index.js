const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // status de sucesso
    res.setHeader('Content-type', 'text/html') // Mudando o tipo de conteudo para text/html. Estamos aptos a enviar html
    res.end('<h1> Esse é meu primeiro programa enviando html </h1>');
    // agora nosso servidor tá podendo enviar html que será interpretado pelo navegador/client em determinada porta
})

server.listen(port, ()=> {
    console.log(`Servidor iniciado na porta ${port}`);
})