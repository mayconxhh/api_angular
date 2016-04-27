var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'controlador1',
			templateUrl: 'template/home.html'
		})
		.when('/crear-personaje',{
			controller: 'controlador2',
			templateUrl: 'template/crearPersonaje.html'
		})
		.when('/detalle/:id', {
			controller: 'controlador3',
			templateUrl: 'template/personaje.html'
		})
		.when('/update/:id',{
			controller4: 'controlador4',
			templateUrl: 'template/actualizar.html'
		})
		.otherwise('/');
});