var express = require('express');
var main = require("./src/js/main.js");
var mysql = require("mysql");
var app = express();

main.connection = main.startSql(mysql);

app.get('/api/empresas', function (req, res) {
    res.send(main.recuperaEmpresas());
});

app.get('/api/empresa', function (req, res) {
    var requisicao = req.query;
    var empresa = requisicao["empresa"];
    res.send(main.buscaEmpresa(empresa));
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