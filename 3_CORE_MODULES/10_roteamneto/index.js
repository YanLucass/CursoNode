const http = require('http');
const fs = require('fs');
const port = 3000;
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true); // recber query da url
    const filename = query.pathname.substring(1); //Saber o nome do arquivo baseado na url acessada.

    if(filename.includes('html')) { // Entra no if se tiver um arquivo html.

        fs.readFile(filename, function(err, data) {
            //verificar se o arquivo existe de forma sincrona
          if(fs.existsSync(filename)) {  
            
                fs.readFile(filename, (err, data) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.write(data); // escreve dados
                    return;
            })
          }
        })
    }
    else {
        fs.readFile('404.html', (err, data) =>{

            if(err) {
                alert('Não consegui achar a pagina perdida dos perdidos');
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return;
         })
    }
})


server.listen(port, () => {
    console.log(`rodando server na porta ${port}`)
})