
console.log(process.argv); // loga array, ele mostra: 0 executavel do node, 1: arquivo que tá executando e 2: argumentos.


const args = process.argv.slice(2);  // reduzindo array para ficar apenas um array com os argumentos.
console.log(args); 

const name = args[0].split('=')[1]; // pegando o primeiro argumento e dividindo(em duas partes) onde tem , o nome é a primeira.
console.log(name);

// fazendo o mesmo para idade.

const age = args[1].split('=')[1]; // do indice 1 eu quero a primeir aparte do igual.
console.log(`o nome dele é ${name}, e ele tem idade de ${age}`);