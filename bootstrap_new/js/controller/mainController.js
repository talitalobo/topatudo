(function(){
	'use strict';

	var modulo = angular.module("TopaTudo");

	modulo.controller('mainController', ['InfosService', function(InfosService){

		var self = this;

		var empresas = [{
			nome: "empresa1"
		},{
			nome: "empresa2"
		}];

		this.getDevs = function() {
			return InfosService.getDevs();
		};

		this.abrirDetalhes = function(nome) {
			alert(nome);
		};

		this.getEmpresas = function(){

			return empresas;
		};
	}]);
}())
