const url = require('url');

const address = 'https://www.meusite.com.br/catalog?produtos=cadeira' // usuario procurando uma cadeira no catalogo

// url decomposta
const parseUrl = new url.URL(address); // passamos o endereço para o metodo de url e jogamos em parseUrl

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
console.log(parseUrl.searchParams);
console.log(parseUrl.searchParams.get('produtos')) // Cria metodo get que pega os parametros de produto.