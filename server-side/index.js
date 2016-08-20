var express = require('express');
var teste = require("./src/js/teste.js");

var app = express();

app.get('/api/empresas', function (req, res) {
    var empresas = {
        "empesaX": "minha empresa",
        "empresaY": "sua empresa"
    };
    res.send(empresas);
});

app.get('/api/empresa', function (req, res) {
    var requisicao = req.query;
    var empresa = requisicao["empresa"];
    res.send(buscaEmpresa(empresa));
});

function buscaEmpresa (empresa) {
    var infos = "Fui la no meu banco e recuperei as informações para a empresa " + empresa;
    return infos;
}

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});