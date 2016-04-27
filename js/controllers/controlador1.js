myApp.controller('controlador1', ['$scope', '$http', function($scope, $http){
	$scope.personajes = [];
	$http({
		method: 'GET',
		url: 'http://apipersonajes.herokuapp.com/api/personajes'
	}).then(function(res){
		// console.log(res.data);
		$scope.personajes = res.data;
	},function(err){
		console.log('Ocurrio un error' + res);
	});
}]);
