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

    console.log(name, price);

    //agora salvariamos dados no bd, mas so vamos mandar uma respsota.

    res.json({message: `O produto ${name}, foi criado com sucesso!`});
})


app.get('/', (req, res) => {
    res.json({message: 'Primeira rota criada com sucesso!'}) //fica mais simples que res.render, não preicsamos de um html
});

