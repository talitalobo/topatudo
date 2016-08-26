(function () {
    'use strict';

    var module = angular.module("MapasTeste", []);

    module.service('MainService', ['$http', function ($http) {

        var self = this;

        /**
         * Busca um endereço e retorna uma promise da resposta
         */
        this.buscarEndereco = function (endereco) {
            endereco = endereco.split(" ").join("+", " ");
            var endpoint = "https://maps.googleapis.com/maps/api/geocode/json?address=" + endereco + "&key=AIzaSyAHpNq2XMrvxC6QsL5JwPZTsgQ5F5mp4r0";
            return $http.get(endpoint);
        };
    }]);
} ())