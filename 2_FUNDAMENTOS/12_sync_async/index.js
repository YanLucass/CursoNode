const fs = require('fs');


fs.writeFile('arquivo.txt', "OIIIII", function(err) {
    setTimeout(() => {
        console.log('arquivo criado');
    }, 3000);
})

console.log('FIM')
