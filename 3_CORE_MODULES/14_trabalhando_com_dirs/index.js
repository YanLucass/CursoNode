const fs = require('fs');

const folder = 'zoro'
//Se não existe a pasta zoro
if(!fs.existsSync(folder)) {
    console.log(`Não existe pasta${folder} Irei criar uma.`);
    fs.mkdirSync(folder);
    console.log(`sub-diretorio ${folder} foi criado com sucesso.`)
} else {
    console.log(`pasta ${folder} já está criada`);
}


// ou poderia ser else if(fs.existsSync(folder));