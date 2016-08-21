(function () {
	'use strict';

	var modulo = angular.module("TopaTudo");

	/**
	 * Controller principal, segura as principais funcionalidades do sistema.
	 */
	modulo.controller('mainController', ['$scope', 'InfosService', 'ModalService', function ($scope, InfosService, ModalService) {

		var self = this;

		var empresaAcessada;

		/**
		 * Usado apenas enquanto não temos o servidor
		 */
		var empresas = [
			{
				nome: "empresa1",
				descricao: "descricao generica :D",
				infos: {
					localizacao: "Rua antonio cirilo gomes 201",
					cnpj: "65464984512",
					sobre: "mais coisas",
					outros: "nseimais"
				}
			}, {
				nome: "empresa2",
				descricao: "Não entre!",
				infos: {
					localizacao: "Rua aderaldo vasconcelos diniz 81",
					cnpj: "987983213",
					sobre: "voce saiu da jaula!",
					outros: "Você passou do primeiro teste e não confiou no código. Pensou fora da jaula. Birl."
				}
			}
		];

		/**
		 * Retorna uma lista com os devs :D
		 */
		this.getDevs = function () {
			return InfosService.getDevs();
		};

		/**
		 * Retorna uma lista com as N empresas a serem mostradas
		 * TODO: definir N
		 */
		this.getEmpresas = function () {
			// return MainService.getEmpresas();
			return empresas;
		};

		/**
		 * Guarda a empresa que está sendo acessada para se poder recuperar
		 * as informações a serem mostradas no modal
		 */
		this.setEmpresa = function (empresa) {
			ModalService.setEmpresaAcessada(empresa);
		};
	}]);
} ())
