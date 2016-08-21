(function(){
	'use strict';

	var modulo = angular.module("TopaTudo");

	modulo.service('InfosService', [function() {

		this.devs = [
		[
			{
				nome: "Eric Breno",
				cargo: "Desenvolvedor Back-End e Front-End",
				imagem: "img/team/eric.jpg",
				contatos: ["http://github.com/ericbreno", "http://facebook.com/ebreno02", ""]
			},
			{
				nome: "Mariana Souto",
				cargo: "Designer",
				imagem: "img/team/mariana.jpg",
				contatos: ["", "http://facebook.com/soutomariana", ""]
			},
			{
				nome: "Talita Lôbo",
				cargo: "Analista de Dados, Desenvolvedora Back/Front End",
				imagem: "img/team/talita.jpg",
				contatos: ["", "http://facebook.com/talitabac", ""]
			}
		],[
			{
				nome: "Kaio Oliveira",
				cargo: "Desenvolvedor Back-End e Front-End",
				imagem: "img/team/kaio.jpg",
				contatos: ["http://github.com/kaiokassiano", "http://facebook.com/moura.kaio", "http://linkedin.com/in/kaiokassiano"]
			},
			{
				nome: "Rodolfo Viana",
				cargo: "Analista de Dados e Desenvolvedor Back-End",
				imagem: "img/team/rodolfo.jpg",
				contatos: ["", "", ""]
			},
			{
				nome: "Arthur Sampaio",
				cargo: "Analista de Dados e Desenvolvedor Front-End",
				imagem: "img/team/arthur.jpg",
				contatos: ["", "http://facebook.com/ArthurSampaioX", ""]
			}
		],[
			{
				nome: "Raphael Do Bu",
				cargo: "Desenvolvedor Front-End",
				imagem: "img/team/raphael.jpg",
				contatos: ["", "http://facebook.com/raphael.santos.923724", ""]
			}
		]
		];

		this.getDevs = function() {
			return this.devs;
		};
	}]);
}())