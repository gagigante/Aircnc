const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-fc7zy.mongodb.net/omnistack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET, POST, PUT, DELETE

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edicao, delete)
//req.body = acessar corpo da requisicao

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

