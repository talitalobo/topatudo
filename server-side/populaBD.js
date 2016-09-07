fs = require('fs');
var mysql = require("mysql");

/**
 * TODO: alterar para as informações do local.
 * Criar a tabela: create table empresas ( cnpj VARCHAR(30) NOT NULL, cep VARCHAR(8) NOT NULL );
 */
var connection = mysql.createConnection({
    host: "localhost",
    user: "eric",
    password: "525458",
    database: "topatudo"
});

/**
 * Adiciona no bd os 100.000 próximos elementos a partir do indice, e chama
 * recursivamente até todos elementos terem sido inseridos.
 * @param data Lista que contem os dados
 * @param indice Indice inicial da inserção.
 */
function jogaNoBd(data, indice) {
    if (indice >= data.length) {
        console.log("insercao finalizada.")
        return;
    }
    var listaInsert = [];
    var indiceLimite = Math.min((indice + 100000), data.length);
    for (var i = indice; i < indiceLimite; i++) {
        var dados = data[i].split(",");
        if (dados === undefined || dados.length < 2 || dados[1].length === 0) {
            continue;
        }
        listaInsert.push(dados);
    }
    var query = "INSERT INTO empresas (cnpj, cep) VALUES ?";
    connection.query(query, [listaInsert], function (err, result) {
        if (err) {
            console.log("Algo deu errado na insercao ");
            console.log(err);
        } else {
            console.log("inserção finalizada de", indice, "até", indiceLimite);
        }
        jogaNoBd(data, indiceLimite);
    });
}

/**
 * Lê o arquivo com os dados e prepara para a inserção no bd.
 */
fs.readFile("cnpjcepOk.csv", "utf-8", function (err, data) {
    if (err) {
        console.log("Algo deu errado...");
        console.log(err);
        return;
    }

    var tudo = data.split("\r\n");
    jogaNoBd(tudo, 1);
});