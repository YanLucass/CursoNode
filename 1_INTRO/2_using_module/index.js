const fs = require('fs'); // importando File(System). Colocamos o nome do modulo como nome da variavel geralmente.

fs.readFile('arquivo3.txt', 'utf8', (err, data) => {

    if(err) {
        console.log(err);
        return;
    }
    console.log(data)
});