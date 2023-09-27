const fs = require('fs');


const oldFile = 'arquivo.txt';
const newFile = 'novoArquivoZoro.txt'
fs.rename(oldFile, newFile, function(err) {
    if(err){
        console.log(err);
        return;
    }
    console.log(`o arquivo ${oldFile}, foi renomeado para ${newFile}`);
})