myApp.controller('controlador3', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http({
		method: 'GET',
		url: 'http://apipersonajes.herokuapp.com/api/personajes/' + $routeParams.id
	}).then(function(res){
		console.log(res.data[0]);
		$scope.personaje = res.data[0];
	},function(err){
		console.log('Ocurrio un error' + err);
	})

	$scope.deleteCharacter = function(){
		$http({
			method: 'POST',
			url:'http://apipersonajes.herokuapp.com/api/personaje/'+$routeParams.id+'?_method=delete'
		}).then(function(res){
			console.log(res);
		}, function(err){
			console.log(err)
		})
		$location.path('/')
	}

}]);