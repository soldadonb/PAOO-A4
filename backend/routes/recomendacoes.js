var express = require('express');
var router = express.Router();

let recomendacoes = []

router.get('/', (req, res) => {
    recomendacoes.sort(function (a, b){
        return b.data - a.data
    });
    res.json(recomendacoes);
});

router.post('/', (req, res) => {
    const recomendacao = Object.assign({recomendacao: req.body.recomendacao, data: Date.now()}, req.body)
    recomendacoes.push(recomendacao)
    res.json(recomendacao);
});

module.exports = router;