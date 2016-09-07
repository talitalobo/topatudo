(function () {
    'use strict';

    var module = angular.module("MapasTeste", []);

    /**
     * Service principal dos serviços do maps
     */
    module.service('MainService', ['$http', function ($http) {

        var self = this;

        /**
         * Endpoint base do servidor
         */
        var ENDPOINT_SERVER = "http://localhost:8081/api";

        /**
         * Endpoint para recuperar empresas
         */
        var EMPRESAS = ENDPOINT_SERVER + "/empresas";

        /**
         * Enpoint para recuperar uma empresa por CNPJ
         */
        var BUSCA_CNPJ = ENDPOINT_SERVER + "/empresa/cnpj?cnpj="

        /**
         * Busca um endereço e retorna uma promise da resposta
         */
        this.buscarEndereco = function (endereco) {
            endereco = endereco.split(" ").join("+", " ");
            var ENPOINT_MAPS = "https://maps.googleapis.com/maps/api/geocode/json?address=" + endereco + "&key=AIzaSyAHpNq2XMrvxC6QsL5JwPZTsgQ5F5mp4r0";
            return $http.get(ENPOINT_MAPS);
        };

        /**
         * Realiza uma busca de empresa por CNPJ
         */
        this.buscarCNPJ = function (cnpjBuscado) {
            return $http.get(BUSCA_CNPJ + cnpjBuscado.trim());
        };
    }]);
} ())