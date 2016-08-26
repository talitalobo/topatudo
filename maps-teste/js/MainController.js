(function () {
    'use strict';

    var module = angular.module("MapasTeste");

    module.controller('MainController', ['MainService', function (MainService) {

        var self = this;

        this.map;

        /**
         * Busca um endereço e atualiza o mapa se o endereço for encontrado
         */
        this.buscarEndereco = function (endereco) {
            MainService.buscarEndereco(endereco).then(function (data) {
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
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(localizacao.lat, localizacao.lng),
                map: self.map
            });
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