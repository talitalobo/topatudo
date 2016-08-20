var express = require('express');
var teste = require("./src/js/zoas.js");

var app = express();

app.get('/api/empresas', function (req, res) {
    var empresas = {
        "empresaX": "minha empresa",
        "empresaY": "sua empresa"
    };
    res.send(empresas);
});

app.get('/api/empresa', function (req, res) {
    var requisicao = req.query;
    var empresa = requisicao["empresa"];
    res.send(zoas.buscaEmpresa(empresa));
});

app.post('/api/cadastro', function (req, res) {
    
    console.log(req.body);
    res.send(req.body);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});