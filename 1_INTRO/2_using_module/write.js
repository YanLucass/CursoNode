const fs = require('fs');

module.exports = (caminhoArquivo, content) => {
    fs.writeFile(caminhoArquivo, content, (err) = {});
} 