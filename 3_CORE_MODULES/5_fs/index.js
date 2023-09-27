const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'}) // fic mais simples do que com setStatusCode e setHead
        res.write(data);
        // dando fim na requisição depois de executar função. Antes a gente dava um fim e mandava dentro do res end. Agora usamos o data
        return res.end(); 
    })
})

server.listen(port, () => {ds
    console.log(`Server em andamento na porta ${port}`);
})