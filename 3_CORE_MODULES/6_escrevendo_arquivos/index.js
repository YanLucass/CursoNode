const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true); // desmmebrando url da requisição
    const name = urlInfo.query.name;

    if(!name) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end() // finalizando requisição
        })
    }
    else {
        fs.writeFile("arquivo.txt", name, function(err, data) { // Vamos poder executar algo qnd o arquivo for escrito
            //mandando redirect

            res.writeHead(302, {Location: "/"}) // qnd usuario escrever o nome, mande para home
            
            return res.end()
        })
    }
})


server.listen(port, () => {
    console.log(`rodando server na porta ${port}`)
})