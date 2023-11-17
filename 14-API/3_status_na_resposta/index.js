import express from 'express';
const app = express();

//temos que ler o body em json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(3000);

//Acabou o setup minimo para criar api

//rotas - end-points

app.post('/createProduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if(!name) {
        res.status(422).json({message: 'O campo nome é obrigatório.'});
        return;
    }
    console.log(name, price);

    //agora salvariamos dados no bd, mas so vamos mandar uma respsota.

    res.status(201).json({message: `O produto ${name}, foi criado com sucesso!`});
});


app.post('/relembrando', (req, res) => {
    const conteudo = req.body.conteudo;

    if(!conteudo) {
        res.status(422).json({message: ' O campo nome é obrigatório!'});
        return;
    }
    const frase = `Estou fksdkfsdkfskdf sdfksdfcksdfk relembrando introduçãffo a ${conteudo}`
    console.log(conteudo);
    res.status(201).json({message: frase});
})


app.get('/', (req, res) => {
    res.status(200).json({message: 'Primeira rota criada com sucesso!'}) //fica mais simples que res.render, não preicsamos de um html
});

