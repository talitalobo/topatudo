var express = require('express');
var app = express();

app.get('/init', function (req, res) {
    res.send("Estou iniciado!");
});

app.get('/empresas?empresa=emp', function (req, res) {
    var empresas = {
        "empesaX": "minha empresa",
        "empresaY" : "sua empresa"
    };
    res.send(empresas);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});