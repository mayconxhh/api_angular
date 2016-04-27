myApp.controller('controlador3', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http({
		method: 'GET',
		url: 'http://apipersonajes.herokuapp.com/api/personajes/' + $routeParams.id
	}).then(function(res){
		// console.log(res.data[0]);
		$scope.personaje = res.data[0];	
	},function(err){
		console.log('Ocurrio un error' + err);
	})
}]);