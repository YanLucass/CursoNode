const readline = require("readline").createInterface({

    //  configuração para receber e retornar dados
    input: process.stdin, 
    output: process.stdout,
})

readline.question("Qual a sua lingaugme preferida? ", (language) => {
    if(language.toLowerCase() === 'python') {
        console.log('legal, to estudando Python para IA, mas isso nem é linguagem :) KKK ZOAS');
    } else {
        console.log(`a sua linguagem preferida é ${language}`);
    }
    
    readline.close()
})