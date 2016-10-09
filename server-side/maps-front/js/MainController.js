(function () {
    'use strict';

    var module = angular.module("MapasTeste");

    /**
     * Controller principal dos serviços do maps
     */
    module.controller('MainController', ['$scope', 'MainService', function ($scope, MainService) {

        var self = this;

        /**
         * Mapa
         */
        this.map;

        /**
         * Streetview
         */
        this.panorama;

        /**
         * Marcador do mapa
         */
        var marker;

        /**
         * Busca uma empresa por seu cnpj e atualiza a localização
         */
        this.buscarCNPJ = function (cnpjBuscado) {
            if (campoInvalido(cnpjBuscado)) {
                alert("Voce deve preencher o campo de busca.");
            } else {
                var promise = MainService.buscarCNPJ(cnpjBuscado);
                promise.then(function (data) {
                    self.buscarEndereco(data.data.cep);
                    // $scope.nomeEmpresa = data.data.nome;
                    // TODO: aqui colocamos as outras coisas a serem
                    // feitas com as informações da empresa                
                }, function (error) {
                    console.log(error);
                    alert(error.data.error);
                });
            }
        };

        /**
         * Busca um endereço e atualiza o mapa se o endereço for encontrado
         */
        this.buscarEndereco = function (endereco) {
            if (campoInvalido(endereco)) {
                alert("Voce deve preencher o campo de busca.");
            } else {
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
                    self.panorama.setPosition(localizacao);
                });
            }
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
         * @private
         * Remove o marcador do mapa
         */
        function tiraMarcador() {
            if (marker !== undefined) {
                marker.setMap(null);
            }
        };

        /**
         * @private
         * Verifica se o campo não indefinido ou vazio.
         */
        function campoInvalido(campo) {
            return campo === undefined || campo.trim().length === 0;
        }

        /**
         * Função main, inicia o mapa
         */
        (function () {
            // Inicia no Brasil todo
            var defaultInitPosition = { lat: -11.5389993, lng: -52.5794322 };
            self.map = new google.maps.Map(document.getElementById('map'), {
                center: defaultInitPosition,
                zoom: 4
            });
            self.panorama = new google.maps.StreetViewPanorama(
                document.getElementById('panorama'), {
                    position: defaultInitPosition,
                    pov: {
                        heading: 34,
                        pitch: 10
                    }
                });
        })();
    }]);

} ())