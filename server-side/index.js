/**
 * @author: Eric Breno
 */
var express = require('express');
var main = require("./src/js/main.js");
var fs = require('fs');
var app = express();

var empresas = {};

/**
 * Carrega o arquivo com o cnpj e as empresas para
 * as buscas.
 */
fs.readFile('cnpjcepOk.csv', 'utf-8', function (err, data) {
    var tudo = data.split("\r\n");
    for (var i = 1; i < tudo.length; i++) {
        var dados = tudo[i].split(",");
        empresas[dados[0]] = dados[1];
    }
});

/**
 * Serve os arquivos estáticos de scripts
 */
app.use('/topatudo/static', express.static(__dirname + '/maps-front'));

/**
 * Serve a pagina de busca
 */
app.get('/topatudo/busca', function (req, res) {
    res.sendfile('maps-front/index.html');
});

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
    // FIXME: Removida consulta ao BD temporariamente,
    // por enquanto lendo o arquivo e realizando consultas diretamente nele
    // main.buscaEmpresaCnpj(res, cnpjBuscado);
    var resultado = empresas[cnpjBuscado];
    if (typeof (resultado) === 'undefined') {
        res.status(400).send({ error: "Não foi possível encontrar a empresa." });
    } else {
        res.status(200).send({ cnpj: cnpjBuscado, cep: resultado });
    }
});

function stringInvalida(campo) {
    return campo === undefined || campo.trim().lenth === 0;
};

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});