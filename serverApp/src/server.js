const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3344, ()=> console.log('Servidor Online - rodando na porta 3344'));
