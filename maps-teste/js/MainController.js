(function () {
    'use strict';

    var module = angular.module("MapasTeste");

    module.controller('MainController', ['$q', 'MainService', function ($q, MainService) {

        var self = this;

        this.map;

        var marker;

        /**
         * Busca uma empresa por seu cnpj e atualiza a localização
         */
        this.buscarCNPJ = function (cnpjBuscado) {
            var promise = MainService.buscarCNPJ(cnpjBuscado);
            promise.then(function (data) {
                self.buscarEndereco(data.data.infos.endereco);
                // TODO: aqui colocamos as outras coisas a serem
                // feitas com as informações da empresa                
            }, function (error) {
            });
        };

        /**
         * Busca um endereço e atualiza o mapa se o endereço for encontrado
         */
        this.buscarEndereco = function (endereco) {
            var promise = MainService.buscarEndereco(endereco);
            promise.then(function (data) {
                var info = data.data.status;
                if (info !== "OK") {
                    alert("O endereço não foi encontrado.");
                    return;
                }
                var localizacao = data.data.results[0].geometry.location;
                self.map.setCenter(localizacao);
                adicionaMarcador(localizacao);
                self.map.setZoom(15);
            });
        };

        /**
         * @private
         * Adiciona um marcador na localização específica
         */
        function adicionaMarcador(localizacao) {
            tiraMarcador();
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(localizacao.lat, localizacao.lng),
                map: self.map
            });
        };

        /**
         * Remove o marcador do mapa
         */
        function tiraMarcador() {
            if (marker !== undefined) {
                marker.setMap(null);
            }
        };

        /**
         * Função main, inicia o mapa
         */
        (function () {
            self.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -11.5389993, lng: -52.5794322 },
                zoom: 4
            });
            console.log(self.map);
        })();
    }]);

} ())