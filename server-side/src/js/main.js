var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "eric",
    password: "525458",
    database: "topatudo"
});

module.exports = {
    buscaEmpresa: function (empresa) {
    },

    /**
     * Busca as informações de uma empresa por seu cnpj
     */
    buscaEmpresaCnpj: function (res, cnpj) {
        var QUERY_EMPRESA = 'SELECT * FROM empresas WHERE cnpj = ' + cnpj;
        res.setHeader('Access-Control-Allow-Origin', '*');
        connection.query(QUERY_EMPRESA, function (err, rows, fields) {
            if (err !== null || rows.length === 0) {
                res.status(400).send({ 'error': 'Nao foi possivel encontrar a empresa.' });
            } else {
                res.status(200).send(rows[0]);
            }
        });
    },

    buscaEmpresas: function () {
    }
};