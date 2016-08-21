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
				nome: "TECNOCENTER MAT. MEDICO HOSPITALAR",
				descricao: "descricao generica :D",
				link: "detail01.html",
				infos: {
					localizacao: "Rua antonio cirilo gomes 201",
					cnpj: "6948769000112",
					sobre: "mais coisas",
					outros: "nseimais"
				}
			}, {
				nome: "LARMED DISTR MED MAT MED HOSPITALAR",
				descricao: "Não entre!",
				link: "detail02.html",
				infos: {
					localizacao: "10831701000126",
					cnpj: "987983213",
					sobre: "voce saiu da jaula!",
					outros: "Você passou do primeiro teste e não confiou no código. Pensou fora da jaula. Birl."
				}
			}, {
				nome: "CIRUFARMA COMERCIAL LTDA",
				descricao: "Não entre!",
				link: "detail03.html",
				infos: {
					localizacao: "Rua aderaldo vasconcelos diniz 81",
					cnpj: "40787152000109",
					sobre: "voce saiu da jaula!",
					outros: "Você passou do primeiro teste e não confiou no código. Pensou fora da jaula. Birl."
				}
			}, {
				nome: "BERG INDUSTRIA E COMERCIO DE CONFECCOES LTDA",
				descricao: "Não entre!",
				link: "detail04.html",
				infos: {
					localizacao: "Rua aderaldo vasconcelos diniz 81",
					cnpj: "879316000103",
					sobre: "voce saiu da jaula!",
					outros: "Você passou do primeiro teste e não confiou no código. Pensou fora da jaula. Birl."
				}
			}, {
				nome: "COMERCIAL MEDEIROS LTDA",
				descricao: "Não entre!",
				link: "detail05.html",
				infos: {
					localizacao: "Rua aderaldo vasconcelos diniz 81",
					cnpj: "4654716000163",
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
