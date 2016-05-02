myApp.controller('controlador4', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http({
		method: 'GET',
		url: 'http://apipersonajes.herokuapp.com/api/personajes/' + $routeParams.id,
	}).then(function(res){
		// console.log(res);
		$scope.personaje = res.data[0];
		console.log($scope.personaje)
	},function(err){
		console.log('Ocurrio un error' + err);
	})

	$scope.updateCharacter = function(){
		var data = {
			photo: $scope.personaje.photo,
			name: $scope.personaje.name,
			age: $scope.personaje.age,
			group: $scope.personaje.group,
			occupation: $scope.personaje.occupation,
		}

		// console.log(data);

		$http({
			method: 'POST',
			data: data,
			url: 'http://apipersonajes.herokuapp.com/api/personaje/'+$routeParams.id+'?_method=put '
		}).then(function(res){
		
			console.log(res)
		
		},function(err){
			console.log('Ocurrió un error: ' + err);
		})

		$location.path('/')

	}

}])