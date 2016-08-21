module.exports = {
    connection: undefined,

    buscaEmpresa: function (empresa) {
        connection.query('SELECT ' + empresa, function (err, results) {
            if (err) throw err;
            console.log(results[0]);
        });
    },

    buscaEmpresas: function () {
        
    },

    startSql: function (mysql) {
        var connection = mysql.createConnection({
            host: 'example.org',
            user: 'bob',
            password: 'secret',
        });

        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });
        return connection;
    }
};