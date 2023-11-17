import express from 'express';
const app = express();

//temos que ler o body em json
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(3000);

//Acabou o setup minimo para criar api

//rotas - end-points

app.get('/', (req, res) => {
    res.json({message: 'Primeira rota criada com sucesso!'}) //fica mais simples que res.render, não preicsamos de um html
});

