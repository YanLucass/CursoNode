const chalk = require("chalk");

const nota = 3;

if(nota >= 7) {
    console.log(chalk.green.bold("Parabens vc está aprovado!"));
}
    else{
        console.log(chalk.black.bgRed('faça a prova de recuperação!'));
    }
