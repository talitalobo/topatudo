(function(){
	'use strict';

	var modulo = angular.module("TopaTudo");

	modulo.service('InfosService', [function() {

		this.devs = [
		[
			{
				nome: "Eric Breno",
				cargo: "Desenvolvedor Back-End e Front-End",
				imagem: "/bootstrap_new/img/team/eric.jpg",
				contatos: ["", "", ""]
			},
			{
				nome: "Mariana Souto",
				cargo: "Designer",
				imagem: "/bootstrap_new/img/team/mariana.jpg",
				contatos: ["", "", ""]
			},
			{
				nome: "Talita Lôbo",
				cargo: "Analista de Dados e Desenvolvedora Back-End e Front-End",
				imagem: "/bootstrap_new/img/team/talita.jpg",
				contatos: ["", "", ""]
			}
		],[
			{
				nome: "Kaio Oliveira",
				cargo: "Desenvolvedor Back-End e Front-End",
				imagem: "/bootstrap_new/img/team/kaio.jpg",
				contatos: ["", "", ""]
			},
			{
				nome: "Raphael Do Bu",
				cargo: "Desenvolvedor Back-End e Front-End",
				imagem: "",
				contatos: ["", "", ""]
			},
			{
				nome: "Arthur Correia",
				cargo: "Analista de Dados e Desenvolvedor Back-End e Front-End",
				imagem: "",
				contatos: ["", "", ""]
			}
		],[
			{
				nome: "Rodolfo Viana",
				cargo: "Analista de Dados e Desenvolvedor Back-End",
				imagem: "",
				contatos: ["", "", ""]
			}
		]
		];

		this.getDevs = function() {
			return this.devs;
		};
	}]);
}())