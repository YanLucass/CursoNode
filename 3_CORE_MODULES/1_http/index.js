const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.write('Oi HTTP');
    res.end(); // finalizando resposta
})


// escutar porta
server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
})