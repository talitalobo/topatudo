(function() {
	'use strict'

	var modulo = angular.module("TopaTudo");

	modulo.controller("GraphController", ['c3', function(c3) {
		this.chart = c3.generate({
			data: {
				columns: [
				['data1', 30, 200, 100, 400, 150, 250],
				['data2', 130, 100, 140, 200, 150, 50]
				],
				type: 'bar'
			},
			bar: {
				width: {
					ratio: 0.5
				}
			}
		});

		setTimeout(function () {
			chart.load({
				columns: [
				['data3', 130, -150, 200, 300, -200, 100]
				]
			});
		}, 1000);
	}]);


}()) 