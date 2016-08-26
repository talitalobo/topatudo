module.exports = {
    buscaEmpresa: function (empresa) {
    },

    buscaEmpresaCnpj: function (cnpj) {
        var mock = {
            "12345678": {
                cnpj: 12345678,
                nome: "Empresa sem nome",
                infos: {
                    endereco: "Aderaldo Vasconcelos Diniz",
                    descricao: "Sem descricao tambem"
                }
            },
            "kaio": {
                cnpj: 87654321,
                nome: "Empresa de Kaio",
                infos: {
                    endereco: "58423495",
                    descricao: "Sem descricao tambem"
                }
            },
            "eric": {
                cnpj: 87654321,
                nome: "Empresa de Eric",
                infos: {
                    endereco: "58415563",
                    descricao: "Sem descricao tambem"
                }
            }
        };

        return mock[cnpj] || mock["12345678"];
    },

    buscaEmpresas: function () {
    }
};