import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/testemongodb"  // criara o bd testemongodb asism q conectar

const client = new MongoClient(uri);

//conectar
async function run() {
    try {
        await client.connect(); // tetnar conectar com o mongodb
        console.log('Conectando ao mongodb');
    } catch(err) {  
        console.log(err);
    }
}


run(); //vai esperar a conexão client.connect(); antes de exportar o client. Assim previne erros já q o client estará conectado.
export default client;

