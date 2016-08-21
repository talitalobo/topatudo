(function(){
	'use strict';

	var modulo = angular.module("TopaTudo");

	modulo.controller('mainController', ['$scope', 'InfosService', function($scope, InfosService){

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
			
		};

		this.getEmpresas = function(){
			return empresas;
		};
	}]);
}())
