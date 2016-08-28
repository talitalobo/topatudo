var express = require('express');
var main = require("./src/js/main.js");
var app = express();

/**
 * Retorna a lista de empresas
 */
app.get('/api/empresas', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(main.recuperaEmpresas());
});

/**
 * Busca uma empresa por seu cnpj
 */
app.get('/api/empresa/cnpj', function (req, res) {
    var requisicao = req.query;
    var cnpjBuscado = requisicao["cnpj"];
    main.buscaEmpresaCnpj(res, cnpjBuscado);
});

function stringInvalida(campo) {
    return campo === undefined || campo.trim().lenth === 0;
};

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});