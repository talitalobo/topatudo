(function () {
    'use strict';

    var modulo = angular.module('TopaTudo');

    /**
     * Funcionalidades que o modal requere.
     */
    modulo.service('ModalService', [function () {

        var self = this;

        this.empresaAcessada;

        /**
		 * Define a empresa que está sendo acessada para que o modal
		 * possa recuperar as informações dela corretamente.
         * A empresa é guardada aqui e não no controller pois o service
         * é um singleton, logo, não existe risco de guardarmos uma
         * informação em um lugar e tentarmos recuperar de outra instância.
		 */
        this.setEmpresaAcessada = function (empresa) {
            if (empresa !== undefined) {
                self.empresaAcessada = empresa;
            }
        };

        this.getEmpresaAcessada = function () {
            return self.empresaAcessada;
        };
    }]);
} ())