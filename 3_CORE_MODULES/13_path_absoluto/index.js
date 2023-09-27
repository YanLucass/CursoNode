const path = require('path');

console.log(path.resolve('arquivo.txt'));

const midFolder = 'musicas';
const fileName = 'yanlucas.txt';


const finalPath = path.join('/', 'arquivos', midFolder, fileName);

console.log(finalPath);