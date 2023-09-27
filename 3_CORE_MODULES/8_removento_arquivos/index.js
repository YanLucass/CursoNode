const fs = require('fs');

fs.unlink('arquiv2o.txt', (err) => {
    if(err) {
        console.log(err);
        return;
    }
    
    console.log('arquivo removido!');
})

