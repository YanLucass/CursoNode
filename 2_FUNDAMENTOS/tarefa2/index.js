import inquirer from "inquirer";
import chalk from 'chalk';

inquirer.prompt([
    {
        name: 'name', message: 'Qual é seu nome?',
    },

    {
        name: 'idade', message: 'Qual é sua idade? '
    },

]).then(response => {

    // verificar se os campos são nulos
    if(!response.name || !response.idade) throw new Error('Nome e idade são obrigatórios!');

    // verificar se usuario digitou numero no nome
    if(!isNaN(parseFloat(response.name))) {
        throw new Error('Seu nome não pode ser um número!');
    } 
    
    // Verificar se digitou string na idade: se o valor convertido para float não é um número: 
    if(isNaN(parseFloat(response.idade))) {
        throw new Error('Sua idade não pode ser uma string.');
    }
    else {
        console.log(chalk.bgYellow.black(`Seu nome é ${response.name}, sua idade é ${response.idade}`));
    }

}).catch(err => {
    console.log(chalk.bgRed(`Deu ${err}`));
})