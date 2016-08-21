(function () {
    'use strict';

    var modulo = angular.module('TopaTudo');

    /**
     * Controller dos modais, responsavel pelas funcionalidades que os modais
     * requiserem.
     */
    modulo.controller('ModalController', ['ModalService', function (ModalService) {

        var self = this;

        /**
         * Recupera a empresa que foi acessada.
         */
        this.getEmpresaAcessada = function () {
            return ModalService.getEmpresaAcessada();
        };

    }])
} ());