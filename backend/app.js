let express = require('express');
let logger = require('morgan');
let cors = require('cors')

let recomendacoesRouter = require('./routes/recomendacoes');

let app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/recomendacoes', recomendacoesRouter);

module.exports = app;
