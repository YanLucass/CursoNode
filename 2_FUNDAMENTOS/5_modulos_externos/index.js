const minimist = require('minimist');

// resgatar argumentos

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args['name']; // pegando o nome do array. Abstração facilitada pelo minimist
const profissao = args['profissao']

console.log(name, profissao);

console.log(`o nome dele é ${name}, e a profissão dele é ${profissao}`);