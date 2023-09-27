// mais de um valor

const x = 10;
const y = 'Yan';
const z = [1,2];

console.log(x, y, z);

// contagem de impressoes(interessante para loops);

let i = 0;
for(i = 0; i <=4; i++) {
    console.count(`o valor de i é ${x}, contagem: `); // template strings
}

//variavel entre string

console.log("o nome dele é %s e ele é programador", y); // converte valor passado para string(mais uma maneira de interpolar)


//limpar o console

setTimeout(() => {
    console.clear();
}, 2000)