const fs = require('fs');

fs.stat('novoarquivo.txt', (err, stats) => { // ou erro ou os detalhes do arquivo
    if(err) {
        console.log(err);
        return;
    }

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink()); // link simbolico, 
    console.log(stats.ctime) // data de criaçã
    console.log(stats.size); //tamanho
})