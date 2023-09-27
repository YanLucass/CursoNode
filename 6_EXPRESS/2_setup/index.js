const express = require('express');
const app = express() // executando express
const port = 3000; // geralmente usamos variaveis de ambiente, mas aqui usaemos fixa por enquanto.

app.get('/', (req, res) => {
    res.send('Hello World 2');
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})